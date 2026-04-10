export type TemplateLibraryOptionsType = {
  isDebug?: boolean
}

export function createTemplateLibrary(
  options: TemplateLibraryOptionsType = {},
): TemplateLibraryOptionsType {
  return {
    isDebug: false,
    ...options,
  }
}
