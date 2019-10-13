( function( blocks, editor, components, i18n, element ) {
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
        el( 'path', { fill: "#007CFF", d: "M2.597,1.625c-1.225,0-2.233,1.008-2.233,2.233V18h19.352v-0.744V7.58V6.835V3.858c0-1.225-1.008-2.233-2.233-2.233H8.551, H7.807H2.597z M2.597,3.114h5.21h0.745c0.419,0,0.745,0.325,0.745,0.744v2.233h8.187c0.419,0,0.745,0.325,0.745,0.745V7.58v8.931, H1.852V3.858c0-0.104,0.021-0.204,0.059-0.293C2.021,3.296,2.283,3.114,2.597,3.114z M10.645,3.114h6.838, c0.314,0,0.575,0.183,0.687,0.451c0.037,0.089,0.059,0.189,0.059,0.293v0.884c-0.098-0.035-0.194-0.072-0.297-0.093, c-0.146-0.03-0.295-0.047-0.448-0.047h-6.698V3.858C10.784,3.596,10.729,3.348,10.645,3.114z" })
    );
    
    blocks.registerBlockType(

        'bm-blocks/bm-tabs', {
        
        title: i18n.__( 'BM Tabs' ),
        description: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
        icon: iconEl,        
        category: 'bm-blocks',
        
        attributes: {
            tab1: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-tab1',
            },
            tab2: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-tab2',
            },
            tab3: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-tab3',
            },
            tab4: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-tab4',
            },
            tabpane1: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-tabpane1',
            },
            tabpane2: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-tabpane2',
            },
            tabpane3: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-tabpane3',
            },
            tabpane4: {
                type: 'array',
                source: 'children',
                selector: 'div.bm-tabpane4',
            },
            alignment: {
                type: 'string',
            },
            tabsnumber: {
                type: 'number',
                default: '2'
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
                  el(
                    SelectControl,
                    {
                        type: 'number',
                        label: i18n.__( 'Number of tabs' ),
                        value: props.attributes.tabsnumber,
                        onChange: function(value) {
                            props.setAttributes({tabsnumber: value});
                        },
                        options: [
                            { value: '2', label: i18n.__( 'Two Tabs' ) },
                            { value: '3', label: i18n.__( 'Three Tabs' ) },
                            { value: '4', label: i18n.__( 'Four Tabs' ) },
                        ],
                    }
                  ),
                ),
                el( 'div', { className: props.className, style: { textAlign: alignment } },
                    el( 'div', {
                        className: 'bm-tabs-container bm-tabs-number' + attributes.tabsnumber },
                        el( 'div', { className: 'bm-tabs' },
                            el( TextControl, {
                                  tagName: 'div',
                                  className: 'bm-tab bm-tab1 active',
                                  inline: true,
                                  placeholder: i18n.__( 'Tab 1' ),
                                  value: attributes.tab1,
                                  onChange: function( newTab1 ) {
                                        props.setAttributes( { tab1: newTab1 } );
                                  },
                                  focus: focusedEditable === 'tab1' ? focus : null,
                            } ),
                            el( TextControl, {
                                  tagName: 'div',
                                  className: 'bm-tab bm-tab2',
                                  inline: true,
                                  placeholder: i18n.__( 'Tab 2' ),
                                  value: attributes.tab2,
                                  onChange: function( newTab2 ) {
                                        props.setAttributes( { tab2: newTab2 } );
                                  },
                                  focus: focusedEditable === 'tab2' ? focus : null,
                            } ),
                            el( TextControl, {
                                  tagName: 'div',
                                  className: 'bm-tab bm-tab3',
                                  inline: true,
                                  placeholder: i18n.__( 'Tab 3' ),
                                  value: attributes.tab3,
                                  onChange: function( newTab3 ) {
                                        props.setAttributes( { tab3: newTab3 } );
                                  },
                                  focus: focusedEditable === 'tab3' ? focus : null,
                            } ),
                            el( TextControl, {
                                  tagName: 'div',
                                  className: 'bm-tab bm-tab4',
                                  inline: true,
                                  placeholder: i18n.__( 'Tab 4' ),
                                  value: attributes.tab4,
                                  onChange: function( newTab4 ) {
                                        props.setAttributes( { tab4: newTab4 } );
                                  },
                                  focus: focusedEditable === 'tab4' ? focus : null,
                            } ),
                        ),
                        el( 'div', { className: 'bm-tabs-body' },
                            el( wp.editor.RichText, {
                                  tagName: 'div',
                                  className: 'bm-tabpane bm-tabpane1 active',
                                  inline: true,
                                  placeholder: i18n.__( 'Tab pane 1' ),
                                  value: attributes.tabpane1,
                                  onChange: function( newTabpane1 ) {
                                        props.setAttributes( { tabpane1: newTabpane1 } );
                                  },
                                  focus: focusedEditable === 'tabpane1' ? focus : null,
                            } ),
                            el( wp.editor.RichText, {
                                  tagName: 'div',
                                  className: 'bm-tabpane bm-tabpane2',
                                  inline: true,
                                  placeholder: i18n.__( 'Tab pane 2' ),
                                  value: attributes.tabpane2,
                                  onChange: function( newTabpane2 ) {
                                        props.setAttributes( { tabpane2: newTabpane2 } );
                                  },
                                  focus: focusedEditable === 'tabpane2' ? focus : null,
                            } ),
                            el( wp.editor.RichText, {
                                  tagName: 'div',
                                  className: 'bm-tabpane bm-tabpane3',
                                  inline: true,
                                  placeholder: i18n.__( 'Tab pane 3' ),
                                  value: attributes.tabpane3,
                                  onChange: function( newTabpane3 ) {
                                        props.setAttributes( { tabpane3: newTabpane3 } );
                                  },
                                  focus: focusedEditable === 'tabpane3' ? focus : null,
                            } ),
                            el( wp.editor.RichText, {
                                  tagName: 'div',
                                  className: 'bm-tabpane bm-tabpane4',
                                  inline: true,
                                  placeholder: i18n.__( 'Tab pane 4' ),
                                  value: attributes.tabpane4,
                                  onChange: function( newTabpane4 ) {
                                        props.setAttributes( { tabpane4: newTabpane4 } );
                                  },
                                  focus: focusedEditable === 'tabpane4' ? focus : null,
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
                        className: 'bm-tabs-container bm-tabs-number' + attributes.tabsnumber, style: { textAlign: alignment } },
                        el( 'div', { className: 'bm-tabs' },
                            el( 'div', {
                                className: 'bm-tab bm-tab1 active', 'data-num': '1'
                            }, attributes.tab1 ),
                            el( 'div', {
                                className: 'bm-tab bm-tab2', 'data-num': '2'
                            }, attributes.tab2 ),
                            el( 'div', {
                                className: 'bm-tab bm-tab3', 'data-num': '3'
                            }, attributes.tab3 ),
                            el( 'div', {
                                className: 'bm-tab bm-tab4', 'data-num': '4'
                            }, attributes.tab4 ),
                        ),
                        el( 'div', { className: 'bm-tabs-body' },
                            el( 'div', {
                                className: 'bm-tabpane bm-tabpane1 active', 'data-num': '1'
                            }, attributes.tabpane1 ),
                            el( 'div', {
                                className: 'bm-tabpane bm-tabpane2', 'data-num': '2'
                            }, attributes.tabpane2 ),
                            el( 'div', {
                                className: 'bm-tabpane bm-tabpane3', 'data-num': '3'
                            }, attributes.tabpane3 ),
                            el( 'div', {
                                className: 'bm-tabpane bm-tabpane4', 'data-num': '4'
                            }, attributes.tabpane4 ),
                        ),
                    ),
                )
            );
        }
    } );
	
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
);