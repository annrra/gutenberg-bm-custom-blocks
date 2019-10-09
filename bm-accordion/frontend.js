( function ( jQuery ) {

    'use strict';

    const $ = jQuery;

    class gbAccordion {

        constructor() {

            this.accordion();

        }

        accordion() {

            $( '.bm-accordion-heading' ).on( 'click', function ( e ) {
                var $this = $( this );
                
                $this.closest( '.bm-accordion-container' ).find( '.bm-accordion-body' ).slideToggle();
                $this.toggleClass( 'collapse' );
            } );

        }
        
    }

    $( document ).on( 'ready', () => {

        window.gbAccordion = new gbAccordion();

    } );

} )( jQuery );