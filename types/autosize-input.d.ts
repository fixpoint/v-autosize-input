declare module 'autosize-input' {
  interface Options {
    miWidth: number;
  }
  export default function(el: HTMLElement, options?: Options): () => void;
}
