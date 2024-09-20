import { INDUSTRY_CATEGORY, LIBRARIES_TECHNOLOGY_VALUES } from '@/shared/aidemos-tags';


type ObjectValues<T> = T[keyof T];
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
    categories: ObjectValues<typeof INDUSTRY_CATEGORY>[]; // industry
    tasks: typeof LIBRARIES_TECHNOLOGY_VALUES;            // technology
    libraries: string[];                                  // functionality
    other: string[];
  };
}