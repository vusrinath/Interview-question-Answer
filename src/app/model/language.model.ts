
export interface APIResponsModel {
    message: string;
    result: boolean;
    data: any;
}

export interface Ilanguage {
    languageId: number;
    language: string;
    logo: string;
}

export interface LanguageTopic {
    languageTopicID: number;
    languageId: number;
    topicName: string;
    orderNo: number;
}