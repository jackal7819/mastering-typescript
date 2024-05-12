const books = [ 'book1', 'book2', 'book3' ];

let foundBook: string | undefined;

for ( let book of books ) {
	if ( book === 'book1' ) {
		foundBook = book;
		break;
	}
}

console.log(foundBook?.length);
