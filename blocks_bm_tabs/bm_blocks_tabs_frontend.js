( function ( jQuery ) {

    'use strict';

    const $ = jQuery;

    class gbtabs {

        constructor() {

            this.remove_tabs();
            this.switch_tabs();

        }

        remove_tabs() {
            
            $( '.bm-tabs-number2 .bm-tab3' ).remove();
            $( '.bm-tabs-number2 .bm-tabpane3' ).remove();
            $( '.bm-tabs-number2 .bm-tab4' ).remove();
            $( '.bm-tabs-number2 .bm-tabpane4' ).remove();
            $( '.bm-tabs-number3 .bm-tab4' ).remove();
            $( '.bm-tabs-number3 .bm-tabpane4' ).remove();

        }
        
        switch_tabs() {
            
            $( '.bm-tabs .bm-tab' ).on( 'click', function ( e ) {
                var $this = $( this );
                var $datanum = $this.attr( 'data-num' ); 
                
                $this.closest( '.bm-tabs' ).find( '.bm-tab' ).removeClass( 'active' );
                $this.addClass( 'active' );
                
                $this.closest( '.bm-tabs-container' ).find( '.bm-tabs-body .bm-tabpane' ).removeClass( 'active' );
                $this.closest( '.bm-tabs-container' ).find( '.bm-tabs-body' ).find( "[data-num='" + $datanum + "']" ).addClass( 'active' );
            } );

        }
        
    }

    $( document ).on( 'ready', () => {

        window.gbtabs = new gbtabs();

    } );

} )( jQuery );