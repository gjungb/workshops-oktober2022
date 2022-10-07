/**
 * A book
 */
export interface Book {
  /**
   * The title
   */
  title: string;
  /**
   * The person who wrote the book
   * @example Herman Melville
   */
  author: string;
  /**
   * A short description
   */
  abstract?: string;
}
