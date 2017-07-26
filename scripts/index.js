$( '#caseReport' ).click(function() {
    console.log(sortType( 'caseReport' ));
});

const sortType = function sortType( tag ) {
    const matches = [];
    for( let i = 0; i < pubs.length; i++ ) {
        const pub = pubs[ i ];
        if( tag === 'all' ) {
            matches.push( pub.id );
        }
        else {
            for( let j = 0; j < pub.type.length; j++) {
                if( tag === pub.type[ i ] ) {
                    matches.push( pub.id );
                }
            }
        }
    }
    return matches;
};

console.log(sortType( 'all' ));
