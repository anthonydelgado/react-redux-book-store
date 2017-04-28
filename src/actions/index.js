export function selectBook(book) {
    //SelectBook is an Action Create and it needs to "return" and object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}