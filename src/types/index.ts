export interface FamilyMember {
     id: string;
     name: string;
     relationship: string;
     birthYear: number;
     deathYear: number;
     shortBio: string;
     fullBio: string;
     influence: string;
     stories: string[];
     image: string;
}

export interface InternationalFigure {
     id: string;
     name: string;
     nameEn: string;
     category: 'A' | 'B' | 'C'; // A: Gặp trực tiếp, B: Nghệ sĩ cùng hệ giá trị, C: Bạn của Việt Nam
     relationship: string;
     nationality: string;
     birthYear: number;
     deathYear: number;
     profession: string;
     meetingYear: number | null;
     meetingPlace: string | null;
     meetingContext: string;
     shortBio: string;
     fullBio: string;
     influence: string;
     stories: string[];
     image: string;
}

export interface TimelineEvent {
     id: string;
     year: number;
     yearEnd?: number;
     title: string;
     period: string;
     location: string;
     description: string;
     significance: string;
     keyEvents: string[];
}

export interface Story {
     id: string;
     title: string;
     category: string;
     location: string;
     year: number;
     shortDescription: string;
     fullContent: string;
     relatedFigures: string[];
     historicalContext: string;
     image: string;
}

