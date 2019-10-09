( function( blocks, components, i18n, element ) {
    
    var el = element.createElement;
    var __ = i18n.__;
    var Editable = blocks.Editable;
    var AlignmentToolbar = wp.editor.AlignmentToolbar;
    var BlockControls = wp.editor.BlockControls;
    var InspectorControls = wp.editor.InspectorControls;
    var TextControl = wp.components.TextControl;
    var SelectControl = wp.components.SelectControl;
    var RangeControl = wp.components.RangeControl;
    var PanelColor = wp.components.PanelColor;
    var PanelBody = wp.components.PanelBody;
    var ColorPalette = wp.components.ColorPalette;
    
    var iconEl = el('svg', { width: 20, height: 20 },
        el( 'path', { fill: "#007CFF", d: "M19.875,3.403c0,0.547-0.443,0.992-0.991,0.992H1.217c-0.547,0-0.991-0.445-0.991-0.992l0,0, c0-0.547,0.444-0.992,0.991-0.992h17.667C19.432,2.412,19.875,2.856,19.875,3.403L19.875,3.403z" }),
        el( 'path', { fill: "#007CFF", d: "M19.875,7.403c0,0.547-0.443,0.991-0.991,0.991H1.217c-0.547,0-0.991-0.444-0.991-0.991l0,0, c0-0.548,0.444-0.991,0.991-0.991h17.667C19.432,6.412,19.875,6.855,19.875,7.403L19.875,7.403z" }),
        el( 'path', { fill: "#007CFF", d: "M19.875,15.403c0,0.547-0.443,0.991-0.991,0.991H1.217c-0.547,0-0.991-0.444-0.991-0.991l0,0, c0-0.548,0.444-0.991,0.991-0.991h17.667C19.432,14.412,19.875,14.855,19.875,15.403L19.875,15.403z" }),
        el( 'path', { fill: "#007CFF", d: "M19.875,11.403c0,0.547-0.443,0.991-0.991,0.991H1.217c-0.547,0-0.991-0.444-0.991-0.991l0,0, c0-0.548,0.444-0.991,0.991-0.991h17.667C19.432,10.412,19.875,10.855,19.875,11.403L19.875,11.403z" })
    );
    
    blocks.registerBlockType(

        'bm-blocks/bm-accordion', {
        
        title: i18n.__( 'BM Аccordion' ),
        description: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
        icon: iconEl,        
        category: 'common',
        
        attributes: {
            title: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-accordion-title',
            },
            text: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-accordion-text',
            },
            color: {
                type: 'string',
                default: '#007CFF'
            },
            alignment: {
                type: 'string',
            },
        },
        
        edit: function( props ) {
            
            var focus = props.focus;
            var focusedEditable = props.focus ? props.focus.editable || 'name' : null;
            var attributes = props.attributes;
            var alignment = props.attributes.alignment;
            
            function onChangeAlignment( newAlignment ) {
                props.setAttributes( { alignment: newAlignment } );
            }
            
            return [
                el(
                    BlockControls,
                    { key: 'controls' },
                    el(
                        AlignmentToolbar,
                        {
                            value: alignment,
                            onChange: onChangeAlignment
                        }
                    )
                ),
                !! props.isSelected && el(
                InspectorControls,
                  {key: 'inspector'},
                  el(PanelColor, 
                    {title: 'Accordion Color', initialOpen: true}, 
                    el(ColorPalette, 
                        {
                            //colors: ['red', 'blue'],
                            allowCustom: true,
                            value: props.attributes.color,
                            onChange: function(value){
                                props.setAttributes( { color: value } );
                            }
                        }
                    )
                  ),
                ),
                el( 'div', { className: props.className, style: { textAlign: alignment } },
                    el( 'div', {
                        className: 'bm-accordion-container' },
                        el( 'div', { className: 'bm-accordion-heading', style: { backgroundColor: attributes.color } },
                            el( wp.editor.RichText, {
                                  tagName: 'div',
                                  className: 'bm-accordion-title',
                                  inline: true,
                                  placeholder: i18n.__( 'Write the accordion title here...' ),
                                  value: attributes.title,
                                  onChange: function( newTitle ) {
                                        props.setAttributes( { title: newTitle } );
                                  },
                                  focus: focusedEditable === 'title' ? focus : null,
                            } ),
                        ),
                        el( 'div', { className: 'bm-accordion-body' },
                            el( wp.editor.RichText, {
                                  tagName: 'div',
                                  className: 'bm-accordion-text',
                                  inline: true,
                                  placeholder: i18n.__( 'Write the accordion text here...' ),
                                  value: attributes.text,
                                  onChange: function( newText ) {
                                        props.setAttributes( { text: newText } );
                                  },
                                  focus: focusedEditable === 'text' ? focus : null,
                            } ),
                        ),
                    ),
                )
            ];
            
        },
          
        save: function( props ) {
            var attributes = props.attributes;
            var alignment = props.attributes.alignment;
            
            return (
                el( 'div', { className: props.className },
                    el( 'div', {
                        className: 'bm-accordion-container', style: { textAlign: alignment } },
                        el( 'div', { className: 'bm-accordion-heading', style: { backgroundColor: attributes.color } },
                            el( 'div', {
                                className: 'bm-accordion-title'
                            }, attributes.title ),
                        ),
                        el( 'div', { className: 'bm-accordion-body' },
                            el( 'div', {
                                className: 'bm-accordion-text'
                            }, attributes.text ),
                        ),
                    ),
                )
            );
        }
    } );
})(
  window.wp.blocks,
  window.wp.components,
  window.wp.i18n,
  window.wp.element,
);