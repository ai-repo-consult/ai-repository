import { CATEGORIES, TASKS_VALUES } from './notebook-tags.js';
import { INDUSTRY, TECHNOLOGY_VALUES } from './notebook-tags.js';

type ObjectValues<T> = T[keyof T];

export interface INotebookMetadata {
  title: string;
  path: string;
  imageUrl: string | null;
  createdDate: string;
  modifiedDate: string;
  links: {
    github: string;
    docs: string | null;
    colab: string | null;
    binder: string | null;
  };
  tags: {
    categories: ObjectValues<typeof CATEGORIES>[];
    tasks: typeof TASKS_VALUES;
    libraries: string[];
    other: string[];
  };
}

// AIDEMOS_METADATA_FILE_NAME

export interface IAiDemoMetadata {
  title: string;
  path: string;
  imageUrl: string | null;
  createdDate: string;
  modifiedDate: string;
  links: {
    github: string;
    docs: string | null;
    colab: string | null;
    binder: string | null;
  };
  tags: {
    industry: ObjectValues<typeof INDUSTRY>[]; // categories
    technology: typeof TECHNOLOGY_VALUES;      // tasks
    functionality: string[];                   // libraries
    type: string[];                            // New to format
    other: string[];
  };
}