YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "ArrowHandler",
        "BackspaceHandler",
        "BoldProperty",
        "CappedHistory",
        "ContentEditableComponent",
        "DocumentStructureComponent",
        "DomHelpers",
        "EditorProperty",
        "EmphasisMarkdownHandler",
        "EnterHandler",
        "EventProcessor",
        "HandlerResponse",
        "HeaderMarkdownHandler",
        "HintsRegistry",
        "HintsRegistryDebugger",
        "IgnoreModifiersHandler",
        "ItalicProperty",
        "ListInsertionMarkdownHandler",
        "NodeWalker",
        "RawEditor",
        "RdfaBackspaceHandler",
        "RdfaBlock",
        "RdfaContextDebugger",
        "RdfaContextScanner",
        "RdfaEditorComponent",
        "RdfaEditorDebugger",
        "RdfaEditorDispatcher",
        "RdfaEditorLoadMonitor",
        "RdfaEditorSuggestedHintsComponent",
        "RdfaEditorToolbarComponent",
        "RichNode",
        "TextInputHandler",
        "UnderlineProperty"
    ],
    "modules": [
        "contenteditable-editor",
        "editor-core",
        "pernetApi",
        "rdfa-editor"
    ],
    "allModules": [
        {
            "displayName": "contenteditable-editor",
            "name": "contenteditable-editor",
            "description": "content-editable is the core of {{#crossLinkModule \"rdfa-editor\"}}rdfa-editor{{/crossLinkModule}}.\nIt handles input events, provides an api for interaction with the document and provides a internal document representation.\n\nrdfa-editor embeds the {{#crossLink \"ContentEditableCompoment\"}}{{/crossLink}} and interacts with the document through the {{#crossLink \"RawEditor\"}}{{/crossLink}} interface.\n\ninput is handled by input handlers such as the {{#crossLink \"TextInputHandler\"}}{{/crossLink}} and {{crossLink \"EnterHandler\"}}{{/crossLink}}."
        },
        {
            "displayName": "editor-core",
            "name": "editor-core",
            "description": "DOM tree walker producing RichNodes"
        },
        {
            "displayName": "pernetApi",
            "name": "pernetApi"
        },
        {
            "displayName": "rdfa-editor",
            "name": "rdfa-editor",
            "description": "RDFa editor\n\nThis module contains all classes and components provided by the @lblod/ember-rdfa-editor addon.\nThe main entrypoint is the {{#crossLink \"RdfaEditorComponent\"}}{{/crossLink}}."
        }
    ],
    "elements": []
} };
});