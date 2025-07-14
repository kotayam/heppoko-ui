export const validatePRTitle = (title: string) => {
    const pattern = /^(feat|ci|test|chore): .+ \[HEP-\d+\]$/i;
    return pattern.test(title);
};
