import './FiltersPanel.scss';

import { useContext, useState } from 'react';

import CrossIcon from '@/assets/images/cross.svg?react';
import { FilterSection } from '@/components/shared/FilterSection/FilterSection';
import { Search } from '@/components/shared/Search/Search';
import { ITabItem, Tabs } from '@/components/shared/Tabs/Tabs';
import { analytics } from '@/shared/analytics/analytics';
import { IAiDemoMetadata } from '@/shared/notebook-metadata';
import { INDUSTRY_CATEGORY, LIBRARIES_TECHNOLOGY, LIBRARIES_TECHNOLOGY_VALUES, TYPE_TASKS, TYPE_TASKS_VALUES } from '@/shared/aidemos-tags';
import { notebooksService } from '@/shared/notebooks.service';
import { NotebooksContext } from '@/shared/notebooks-context';

import { Button } from '../shared/Button/Button';
import { closeFiltersPanel } from './filters-panel-handlers';

interface IFilterGroup<T extends string = string> {
  title: string;
  group: T;
  tags: string[];
}

type FilterGroupKey = keyof IAiDemoMetadata['tags'];

const OTHER_TAGS = await notebooksService.getOtherTags();

const filterGroups: IFilterGroup<FilterGroupKey>[] = [
  {
    title: 'Industry categories',
    group: 'categories',
    tags: Object.values(INDUSTRY_CATEGORY),
  },
  { title: 'AI types', group: 'tasks', tags: TYPE_TASKS_VALUES },
  { title: 'Library techonology', group: 'libraries', tags: LIBRARIES_TECHNOLOGY_VALUES },
];

const tasksSectionsTitlesMap: Record<keyof typeof TYPE_TASKS, string> = {
  AI_TYPE: 'AI Type',
  USE_CASE_FUNCTIONALITY: 'Use case functionality',
};

const librariesSectionsTitlesMap: Record<keyof typeof LIBRARIES_TECHNOLOGY, string> = {
  AI_FRAMEWORKS: 'AI Frameworks',
  AI_TECHNIQUES: 'AI Techniques',
  COMPLEXITY_LEVEL: 'Complexity level',
};

function getTagsFilterSections<T extends Record<string, Record<string, string>>>({
  group,
  tagsMap,
  titlesMap,
  selectedTags,
  filterTags,
  handleTagClick,
}: {
  group: FilterGroupKey;
  tagsMap: T;
  titlesMap: Record<keyof T, string>;
  selectedTags: IAiDemoMetadata['tags'];
  filterTags: (tags: string[]) => string[];
  handleTagClick: (tag: string, group: FilterGroupKey) => void;
}): JSX.Element[] {
  return Object.entries(tagsMap).map(([sectionKey, tagsMap]) => {
    const title = titlesMap[sectionKey];
    const filteredTags = filterTags(Object.values(tagsMap));
    if (!filteredTags.length) {
      return <></>;
    }
    return (
      <FilterSection<typeof group>
        key={`filter-section-${group}-${sectionKey}`}
        title={title}
        group={group}
        tags={filteredTags}
        selectedTags={selectedTags[group]}
        onTagClick={(tag, group) => handleTagClick(tag, group!)}
      ></FilterSection>
    );
  });
}

export const FiltersPanel = (): JSX.Element => {
  const { selectedTags, setSelectedTags } = useContext(NotebooksContext);

  const [tagsSearch, setTagsSearch] = useState('');

  const filterTags = (tags: string[]): string[] =>
    tags.filter((tag) => {
      const hasNotebooksForTag = notebooksService.allNotebooksTags.includes(tag);
      const isTagSearched = tag.toLowerCase().includes(tagsSearch.toLowerCase());
      return hasNotebooksForTag && isTagSearched;
    });

  const handleTagClick = (tag: string, group: FilterGroupKey): void => {
    const tags = selectedTags[group] as string[];
    if (tags.includes(tag)) {
      setSelectedTags({
        ...selectedTags,
        [group]: tags.filter((v) => v !== tag),
      });
    } else {
      setSelectedTags({
        ...selectedTags,
        [group]: [tag],
      });
      analytics.sendFilterEvent(tag);
    }
  };

  const tasksFilterSections = getTagsFilterSections<typeof TYPE_TASKS>({
    group: 'tasks',
    tagsMap: TYPE_TASKS,
    titlesMap: tasksSectionsTitlesMap,
    selectedTags,
    filterTags,
    handleTagClick,
  });

  const librariesFilterSections = getTagsFilterSections<typeof LIBRARIES_TECHNOLOGY>({
    group: 'libraries',
    tagsMap: LIBRARIES_TECHNOLOGY,
    titlesMap: librariesSectionsTitlesMap,
    selectedTags,
    filterTags,
    handleTagClick,
  });

  const getFiltersCount = (group: FilterGroupKey): number => {
    const groupFiltersCount = selectedTags[group].length;
    return group === 'categories' ? groupFiltersCount + selectedTags['other'].length : groupFiltersCount;
  };

  const tabItems: ITabItem[] = filterGroups.map(({ title, group, tags }) => ({
    key: `tab-item-${group}`,
    title,
    badge: getFiltersCount(group),
    content: (
      <>
        <Search
          key={`search-${group}`}
          placeholder={`Filter ${title} by name`}
          className="filters-search"
          value={tagsSearch}
          search={setTagsSearch}
        ></Search>
        {group === 'tasks' ? (
          tasksFilterSections
        ) : group === 'libraries' ? (
          librariesFilterSections
        ) : (
          <FilterSection<FilterGroupKey>
            key={`filter-section-${group}`}
            group={group}
            tags={filterTags(tags)}
            selectedTags={selectedTags[group]}
            onTagClick={(tag, group) => handleTagClick(tag, group!)}
          ></FilterSection>
        )}
        {group === 'categories' && !!filterTags(OTHER_TAGS).length && (
          <FilterSection<FilterGroupKey>
            key={`filter-section-other`}
            group="other"
            title="Quick Filters"
            tags={filterTags(OTHER_TAGS)}
            selectedTags={selectedTags['other']}
            onTagClick={(tag, group) => handleTagClick(tag, group!)}
          ></FilterSection>
        )}
      </>
    ),
  }));

  return (
    <section className="flex-col filters-panel">
      <div className="lg-hidden filters-panel-header">
        <span>Edit Notebooks filters</span>
        <span onClick={closeFiltersPanel} className="close-icon">
          <CrossIcon />
        </span>
      </div>
      <Tabs items={tabItems} onTabChange={() => setTagsSearch('')}></Tabs>
      <div className="lg-hidden filters-panel-footer">
        <Button
          onClick={closeFiltersPanel}
          text="Apply filters"
          variant="action"
          size="l"
          className="apply-filters-button"
        ></Button>
      </div>
    </section>
  );
};
