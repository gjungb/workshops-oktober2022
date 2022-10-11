/**
 * A book
 */
export interface Book {
  /**
   * The ISBN
   * @link {https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer}
   */
  isbn: string;
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
