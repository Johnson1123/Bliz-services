export interface AccordionItemData {
  id: number;
  title: string;
  content: {
    description: string;
  };
}

export interface bannerDataI {
  quote: string;
  text: string;
  author: string | null;
  link: string;
  center: boolean;
  image: string;
}

export interface heroServiceSectionI {
  tag: string;
  list: string[];
  image: any;
  title1: string;
  title2: string;
}

export interface programsServicesI {
  image: string;
  name: string;
  text: string;
}
export interface programServicesSectionI {
  data: programsServicesI[];
  title1: string;
  title2: string;
}
