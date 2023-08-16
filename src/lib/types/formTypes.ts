export type ValidationError = Record<string, string[]> | string[];

export type NestedErrors = {
	[key: string]: ValidationError | NestedErrors;
};
