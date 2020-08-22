type SocialLinksType = {
    [key: string]: string
}

export type ProfileType = {
    city: string,
    country: string,
    experience: number,
    gender: string,
    jobTitle: string[],
    name: string,
    skills: string[],
    socialLinks: SocialLinksType,
    state: string
}
