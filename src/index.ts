export type TemplateLibraryOptions = {
  debug?: boolean
}

export function createTemplateLibrary(options: TemplateLibraryOptions = {}): TemplateLibraryOptions {
  return {
    debug: false,
    ...options,
  }
}
