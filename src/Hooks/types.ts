export interface Job {
    id: string;
    organization_name: string;
    organization_icon: string;
    position: string;
    salary: string;
    type: string;
    city: string;
    created_at: string;
    updated_at: string;
    currency: string;
    gradient: number;
    is_archived: boolean | null;
    organization_icon_formats: { type: string; url: string }[];
    price_from: number;
    price_to: number;
    slug: string;
    workday: string | null;
    date: string;
    time: string;
    location: string;
    title: string;
    cover: string;
    cover_formats: [null];
    icon: string;

    name: string;

    jobs_count: number;
    events_count: number;
    meetups_count: number;
}
