if (typeof (Dynamicweb) == 'undefined') {
    var Dynamicweb = new Object();
}

Dynamicweb.DebugPanel = null;

if (typeof (jQuery) != 'undefined') {
    (function ($) {
        Dynamicweb.DebugPanel = {
            assets: {
                terminology: {
                    close: 'Close',
                    ready: 'Ready',
                    stackTrace: 'Stack trace',
                    performance: 'Performance',
                    state: 'Cache',
                    expandAll: 'Expand all',
                    collapseAll: 'Collapse all',
                    pageExecution: 'Page execution',
                    areaValues: 'Language/area',
                    pageValues: 'Page',
                    stylesheetValues: 'Stylesheet',
                    templateValues: 'Template',
                    templateTags: 'Template tags',
                    navigations: 'Navigations',
                    otherValues: 'Other values',
                    generatedList: 'Set',
                    rawView: 'Raw view',
                    database: 'Database',
                    database_sql: 'SQL Server',
                    database_index: 'Search index',
                    empty: 'empty'
                },

                images: {
                    header: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAxCAYAAAAfmhMZAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9wFDg4RG1I1SUEAAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAAAChJREFUKM9j/PTp038GKGBiQAIoHJb///8zEFZGjgFEGj2sDRihgQgAonE3Js39dGoAAAAASUVORK5CYII=',
                    collapse: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wFCg0YNKUC5l8AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAAACxJREFUGNNj/P//PwMM2NnZMTAwMDAcOnQILsbEQAAQVMBoa2v7nzITaO9IABcWDb6AH9wtAAAAAElFTkSuQmCC',
                    expand: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wFCg0YJc+yxq0AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAAAC1JREFUGNNj/P//PwMM2NnZ/WdgYGA4dOgQI0yMiYEAIKiA0dbW9j9lJtDekQBiFQ++XmryHwAAAABJRU5ErkJggg==',
                    close: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB3ElEQVRYhe2WT26bQBTGHzAzsocgL8o/I4QXcAKWkaxuo/QUruQeINdpr9Eq22xyiniBF2CP1QWDi5BLPN2UiiZyGNpEUSueNKvv8X0/jXhPowgh4DVLfdX0AWAAGAD+BEDXdfOURim1XhSAELKglK40TZs/1DRNm+u6viKELHsRCCGkDsZ4EYbhfRzHwvf9QlXVeaOpqjr3fb+I41hEUXTEGC9lfRWZVUwIeR8EwcfJZPLrxhhj+zRNLwEAPM/7Ytv2WaNxzkWSJB8Oh8OnLu9OAErpG0rpajabTR5q2+12rygKtMObWq/XRVEUUVVV7K8AAAAQQueu6147jmN0NgPAbrf7lqbpu7qub7p6pX7Cuq5vN5vNBWOseM5waYAGIsuyJyH6hvcC+FlYUZST3wghjgDwvY+hNABC6K3neZ8ty9JP9di2bUyn02uE0PmzAsiEtyFc15WG6JyC0WhkG4ZxFwTBowlgjO2FEOA4zqMxTJIkL8syLMvy61P+nTdQVRXL8/yKc/4babOIsiy7ZIzt21qe50fO+VVXOAD0WsXLKIqOXas4DMN7jPFC1lcaoIEwTZO3w9sQpmnmfcJ7AwghYDweW6c0SqnZ109qFb9k/XsvogFgAPjvAH4Aowf0GdAjfMAAAAAASUVORK5CYII=',
                    performance: 'data:image/png;base64,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',
                    state: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAK3RFWHRDcmVhdGlvbiBUaW1lAE1vIDE1IEF1ZyAyMDA1IDE4OjI2OjExICswMTAwLwH4jAAAAAd0SU1FB9MCGBcKDSokyfMAAAAJcEhZcwAACvAAAArwAUKsNJgAAAAEZ0FNQQAAsY8L/GEFAAADC0lEQVR42s1XO0/kMBB2sg9przrp/hEVBQWPalmabeivuW7FCh2iu+IolmYpWHZzIGhAouI/nJBOCCFRgISEhA4hkEiyiePzJDixJ3aO3b0HlkaJPbbn88w3k5iQ/9wsk6LT6fy0bbvGGCM6oZQSrs+NR1EUP8MwRHqC1oduu93+YETW7Xaf+WZMFm40lV6vx7gRZQwkDCnzfcq2t3vs6YmyhwfK7u8pu7uj7PaWspsbyq6vKVtbW38GO2UTAEBpWaqD5D68g8Ap1XWJQLNtK3UydwyB5ULYyyS7CMC4TWCS8cvG/yqAIqOyTuwfDxkIVyuVSkbCAckgBCbCyWMwb3n5E9+HxMJVnGOf3ZWV1ruYA9VqtdZsNmsmDwwGA1Kv13OcgCmw4e7ugMzNLcbvEGthSIjjfDF6uCw6/4JwhQDGba8hHITj8LCnrAsCf3IAyen0RmVA4LmZmYYSlsvL1T/jAWwM67L9cfikNJwEwGtaVopleSMA4hD4vk94bTdu4Hke6ff7Rr3rumRvb0cyqOqDYFgMoFKpkEajYTRgqgPQIOUcZ0AWFhZz+S/k6mo9nmcEAB2c43IrqgPSLGL6ujMWxdVULlQT1wH5NLiPBerAyYmjrM3VARi0rNGMw2lARChMAGy7RKamltLTw/Ps7Ee8Ls0CscGoxgUAMaYHwdK52TwpBPxnJ91ILizYI7IRDACPmwBkesSBIKBxXTd9u4Mg4mNMCyCJc6S4GBMOz0d1wCMHBw4xNc+DPP9mDAnoj4+dtI/1QDjsAfB6CqBcrpDZ2SXFA3II9vf7ZH6+HlNG5oB4Hh3tkOnpBn+3tF64uGgVA5BJaOIAbIbTDXMgH+fMGKUR0kUqADCA4599zcwAhMt1AISE4ZBtbn58VH/Zhp6SBUUAZA/gnBfvCdn0XuBGvY2Nr+91HBrZA7qc/50HRLzHBoA9oAuByQMjAIhyhuU/Gn4L4/0oV+VEUeG3Mm3BkQlnBOD77uPW1uoQXyCTYpHcC87PWy8GWLyheiGl5PT0u/YSKxPuTbZf1mgc9RzmgvgAAAAASUVORK5CYII=',
                    database: 'data:image/png;base64,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',
                    templateTags: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAK3RFWHRDcmVhdGlvbiBUaW1lAE1vIDE3IEZlYiAyMDAzIDIzOjQ5OjQ2ICswMTAwscrZowAAAAd0SU1FB9MCERcmLsx6nKUAAAAJcEhZcwAACvAAAArwAUKsNJgAAAAEZ0FNQQAAsY8L/GEFAAAC5klEQVR42uVXv2sUQRR+O7N3mxADhgNB/EWKcGV6wcJCi7v/ILWVNhcwimgqQS2UiIXBysL/QMkVghGCoCiCyJFgTGcROCSKQUUvd+PMzo+beTuzl+TWRh8Mb+bNZb833zfvbRbgf7fIXiy+6ixw12CMAfBhfK8HmZiKmxhAeM+Kt1utu7fna7OZTAT4/Ze/2d+yTpext+tb7OGzTXbxenNB48Z60ut2G+dPJrD9C+DjFsDnH3yT8xMTAEqkT+c8RlQ8Ut5eEz1A+pRmFTtxZIIDfoHNqakGD886CbBuN/UavP6cQkIpfzCRnqK18HEMJeXx+t70e5OATkrY5PEJYG/akGEg1QwkeDk9LekPDlhSc+N5jPCjxcqLNRWe74l1mfbBIysBGwtLIAORpHz5TMdQbui3pND0x5ErhR6OHBYTNpZXghjpLfz0rVVOS1mOsTH4dKFiEiUWOEVJEHRyjOUyoGihCFwM4PSm4EnCA7EB1/vEk0ye+RlQCdi3WtO+cbXKNe5TThGwnciuTPWNoAQUlZ8NfqjOmRjhfyZu2WgsN8U8FJtrZfGtS0hwAhTVuBnqtOmDxUR4onwaizwxAj7LlQDTmmpr3Y3vSz+d/f1YfhmiziZOfnjerYLO5cq+wW22XQlUVhHSn/qqYAjwgRLYNzpWdfztRtXIPiz4QAl0F8MdTvvVR5GtBlTOsr0n4JUA3QHc4czcVaM4CXTQPj1ur8KqM3s/cR4D3jLEI6R71HCrgy0flc1nXDWr8UQ2pgPcX1sDjOWVgATebl7DegjQUe1L8iEj3JfcE+QzANlXapDKO1U3MLe9Kwn8ZaheEPj9jRMopAryJDAbAfqLqAI2qAry6C+iCoL/EQkVfCfP3PYrlaESCL4L3m18dX5okiiCd2Vr6+1AK97Zaa68+FA7faoKk8cOuhnj2z4E+JPHr4UETcOu/YNLN58u8URqzmdY4LMs75Mtdw+g+WDxXL2QE/0T9geqo89NFGoLwwAAAABJRU5ErkJggg==',
                    information_small: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK3RFWHRDcmVhdGlvbiBUaW1lAEZyIDE1IE5vdiAyMDAyIDEwOjA4OjI5ICswMTAw9aJixgAAAAd0SU1FB9MDBQkRH/kAW6kAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAEZ0FNQQAAsY8L/GEFAAACbklEQVR42qVTS2sTURT+JplMZjKTJn2olEiVpgakXbjRokiXio2oVAUfm1DouhvdCf6HolvrXl2MoijoRgk+uunCpkmMVkqrkpLONO953fFMBlJK6KoXZi4z537fd75zzgUOuLieP7c+j8Buzkv9clqWhSRzmNvU6oW2XlVhhxfw9mJ5f4LZfGZwiD06c35MDkVD+FVmqOwYsFsGzG0NtcKaxmwlg+eTL3sJZkuZ5An+ydTUMS77Dyh+KiLG6oAowg6G0AhIAHOAtZ82GtI1vDr3epfg9peRwYSSuzozLqsloNIEUuvLyN+Lw+F4qCUON54RGBZg055f3YJhpfDhph7oEBj1+cmzo/K3DReVOiMlF05EhsPLpK7Akft9LUYxxwYGBg7BMuY8aIdAjInpeFTA980WYJpEaCAgieAjEYjRPkhKBHBdAjv+IwgeWdrD8t5LiYST6xUPaPqmKINgH3kOhjsa4RBttu1n4BFZZCUYTHYJXMdi21VSNygQ4DoE2wEFjws8LBJcqXqnmE/iZWAaXi3cLkFDbxTNtj0By+w2p5z7gwcrOo4PK1jeJKcugZjtq7cNz2q+S9DWamqrok/A9D7djtilIzre3B8lvxJymoTxhz9ISQOqlE6jQRlYareI4JSFrdXfGufsKoSH4gQWKRiBopAtl/nAFlmt1tYh9C3uHaTLH69AaL3A0QTvew3g5KkEUsMy1OxfoFSgGrUBfacJS7mApevZ3lGefj8Np7qI/vhhhKkDbdNvq1ebFk1XjZTdgTtYmsnuf5lOv4tB2JijDKbBU6scqrZhFqh9KoToU3y92zzoDd6z/gOffB46fjWjPwAAAABJRU5ErkJggg=='
                }
            },

            Renderer: {
                listRowRenderers: {
                    General: function (item, index, list, environment) {
                        /// <summary>Renders 3-columns row. Second column is stretched.</summary>
                        /// <param name="item">Data item to render.</param>
                        /// <param name="index">1-based index of the data item.</param>
                        /// <param name="list">Target list.</param>
                        /// <param name="environment">Environment variables.</param>

                        var row = $(item);
                        var columns = row.find('td');
                        var key = $(columns[0]).text();
                        var type = $(columns[2]).text();
                        var value = $(columns[1]).text();

                        if (key && key.length && type && type.length) {
                            // Ommitting the heading
                            if (key.toLowerCase() != 'key') {
                                list.append(Dynamicweb.DebugPanel.Renderer.renderListRow({
                                    columns: [
                                        { value: key, width: 250 },
                                        { value: value, stretch: true },
                                        { value: type, color: '#61b157', width: 250, align: 'right' }
                                    ],

                                    environment: environment
                                }));
                            }
                        }
                    },

                    GeneralQuery: function (item, index, list, environment) {
                        /// <summary>Renders 2-columns row. Second column is stretched.</summary>
                        /// <param name="item">Data item to render.</param>
                        /// <param name="index">1-based index of the data item.</param>
                        /// <param name="list">Target list.</param>
                        /// <param name="environment">Environment variables.</param>

                        if (item) {
                            list.append(Dynamicweb.DebugPanel.Renderer.renderListRow({
                                columns: [
                                    { value: index.toString(), width: 50, color: '#b1b1b1' },
                                    { value: item.query, stretch: true, rawView: true, rawViewValue: item.query + '\n\n\n' + Dynamicweb.DebugPanel.assets.terminology.stackTrace + ':\n\n' + item.stack },
                                ],

                                environment: environment
                            }));
                        }
                    },

                    PageExecution: function (item, index, list, environment, depth) {
                        /// <summary>Renders 4-columns row. Second column is stretched.</summary>
                        /// <param name="item">Data item to render.</param>
                        /// <param name="index">1-based index of the data item.</param>
                        /// <param name="list">Target list.</param>
                        /// <param name="environment">Environment variables.</param>

                        var padding = '';
                        var row = $(item);
                        var innerTable = null;
                        var columns = row.find('td');
                        var eventColumn = $(columns[1]);
                        var timestamp = $(columns[0]).text();
                        var eventName = eventColumn.text();
                        var offsetLast = $(columns[2]).text();
                        var offsetTotal = $(columns[3]).text();

                        if (typeof (depth) == 'undefined' || depth == null) {
                            depth = 0;
                        } else {
                            for (var i = 0; i < depth; i++) {
                                padding += '    ';
                            }
                        }

                        if (!isNaN(parseInt(offsetLast))) {
                            innerTable = eventColumn.find('table');
                            
                            if (innerTable != null && innerTable.length) {
                                $(innerTable).find('tr').each(function (i) {
                                    Dynamicweb.DebugPanel.Renderer.listRowRenderers.PageExecution(this, i, list, environment, depth + 1);
                                });
                            } else {
                                list.append(Dynamicweb.DebugPanel.Renderer.renderListRow({
                                    columns: [
                                    { value: timestamp, color: '#b1b1b1', width: 85 },
                                    { value: padding + eventName, stretch: true, rawView: true },
                                    { value: '+' + offsetLast, color: '#61b157', width: 75, align: 'right' },
                                    { value: '+' + offsetTotal, color: '#d75a5a', width: 75, align: 'right' }
                                ],

                                    environment: environment
                                }));
                            }
                        }
                    },

                    TemplateTags: function (item, index, list, environment) {
                        /// <summary>Renders 3-columns row. Second column is stretched.</summary>
                        /// <param name="item">Data item to render.</param>
                        /// <param name="index">1-based index of the data item.</param>
                        /// <param name="list">Target list.</param>
                        /// <param name="environment">Environment variables.</param>

                        var row = $(item);
                        var isEmptyValue = false;
                        var columns = row.find('td');
                        var name = $(columns[1]).text();
                        var value = $(columns[4]).text();

                        if (name && name.length) {
                            // Ommitting the heading
                            if (name.toLowerCase() != 'tag') {
                                name = name.replace(/<!--\s?/g, '');
                                name = name.replace(/\s?-->/g, '');
                                name = name.replace(/@/g, '');

                                isEmptyValue = !value || !value.length;

                                list.append(Dynamicweb.DebugPanel.Renderer.renderListRow({
                                    columns: [
                                        { value: index.toString(), width: 50, color: '#b1b1b1' },
                                        { value: name, stretch: true },
                                        { value: !isEmptyValue ? value : '[' + Dynamicweb.DebugPanel.assets.terminology.empty + ']', width: 350, color: !isEmptyValue ? '' : '#b1b1b1' }
                                    ],

                                    environment: environment
                                }));
                            }
                        }
                    },

                    Database_sql: 'GeneralQuery',
                    Database_index: 'GeneralQuery',
                    AreaValues: 'General',
                    PageValues: 'General',
                    StylesheetValues: 'General',
                    TemplateValues: 'General',
                    Navigations: 'General'
                },

                appendList: function (to, contents) {
                    /// <summary>Appends the contents of the given list to the output.</summary>
                    /// <param name="to">Element to append to.</param>
                    /// <param name="contents">List to append.</param>

                    to = $(to);

                    if (contents && contents.length) {
                        for (var i = 0; i < contents.length; i++) {
                            to.append(contents[i]);
                        }
                    }
                },

                createLinkButton: function (text, params) {
                    /// <summary>Creates a link button.</summary>
                    /// <param name="text">Button text.</param>
                    /// <param name="params">Additional parameters.</param>

                    var ret = null;

                    if (!params) {
                        params = {};
                    }

                    ret = $('<a></a>')
                    .attr({
                        'href': 'javascript:void(0);'
                    }).css({
                        'display': 'block',
                        'width': (params.width || 65) + 'px',
                        'font-family': 'Segoe UI, sans-serif',
                        'font-size': '13px',
                        'height': '20px',
                        'lineHeight': '18px',
                        'color': '#333333',
                        'textDecoration': 'none',
                        'borderRadius': '3px',
                        'fontWeight': 'normal',
                        'textShadow': '#eee 0px 1px 0px',
                        'boxShadow': '#fff 0px 0px 10px',
                        'border': '1px solid #ccc',
                        'borderBottom': '1px solid #bbb',
                        'textAlign': 'center',
                        'backgroundColor': '#f8f8f8'
                    })
                    .html(text);

                    if (params.click) {
                        ret.click(function (e) { params.click(e); });
                    }

                    return ret;
                },

                createList: function (data, params) {
                    /// <summary>Creates a new list.</summary>
                    /// <param name="data">List data.</param>
                    /// <param name="params">Additional parameters.</param>

                    var ret = [];
                    var list = null;
                    var dataInDom = false;

                    if (!params) {
                        params = {};
                    }

                    dataInDom = typeof (params.dataInDom) == 'undefined' || params.dataInDom == null || !!params.dataInDom;

                    if (data) {
                        ret[ret.length] = $('<a></a>')
                            .click(function (e) {
                                Dynamicweb.DebugPanel.toggle(params.id);

                                e.stopPropagation();
                            })
                            .bind('expand', { data: data, params: params }, function (e) {
                                if (!$(e.target).next('ul').find('li').length) {
                                    Dynamicweb.DebugPanel.Renderer.renderList(data, params);
                                }
                            })
                            .attr({
                                'id': 'dw_debug_' + params.id,
                                'href': 'javascript:void(0);',
                                'data-list-id': params.id,
                                'class': 'dw-debug-list'
                            })
                            .css({
                                'font-family': 'Segoe UI, sans-serif',
                                'font-size': '13px',
                                'color': '#1ba4d7',
                                'display': 'block',
                                'height': '16px',
                                'lineHeight': '16px',
                                'text-decoration': 'none',
                                'margin': '0px',
                                'marginBottom': '4px',
                                'padding': '0px',
                                'border': 'none',
                                'outline': 'none',
                                'fontWeight': 'bold',
                                'paddingLeft': '14px',
                                'backgroundRepeat': 'no-repeat',
                                'backgroundPosition': '0px 4px',
                                'backgroundImage': 'url(' + Dynamicweb.DebugPanel.assets.images.expand + ')'
                            })
                            .html(params.name + '&nbsp;(' + (dataInDom ? ($(data).find('tr').length - 1) : data.length) + ')');

                        list = $('<ul></ul>')
                            .css({
                                'font-family': 'Segoe UI, sans-serif',
                                'font-size': '13px',
                                'color': '#383838',
                                'list-style': 'none',
                                'margin': '0px',
                                'marginBottom': '5px',
                                'padding': '0px',
                                'display': 'none'
                            });

                        params.list = list;
                        ret[ret.length] = list;

                        if (dataInDom) {
                            // Finally, moving the table itself and hiding it (move is needed to fix the layout)
                            $(data).css({ 'display': 'none' });
                            ret[ret.length] = data;
                        }
                    }

                    return ret;
                },

                renderListRow: function (info) {
                    /// <summary>Renders list row.</summary>
                    /// <param name="info">Row information.</param>

                    var ret = null;
                    var windowWidth = 0;
                    var occupiedWidth = 0;
                    var stretchingColumn = null;

                    if (!info) {
                        info = {};
                    }

                    if (info.environment) {
                        windowWidth = info.environment.windowWidth;
                    }

                    if (info.columns && info.columns.length) {
                        ret = $('<li></li>')
                            .css({
                                'margin': '0px',
                                'marginLeft': '12px',
                                'padding': '0px',
                                'lineHeight': '22px'
                            });

                        for (var i = 0; i < info.columns.length; i++) {
                            col = $('<div></div>')
                                    .css({
                                        'font-family': 'Segoe UI, sans-serif',
                                        'font-size': '13px',
                                        'float': 'left',
                                        'position': 'relative',
                                        'margin': '0px',
                                        'padding': '0px',
                                        'paddingLeft': i == 0 ? '2px' : '0px',
                                        'paddingTop': '2px',
                                        'paddingBottom': '2px',
                                        'lineHeight': '22px',
                                        'textAlign': info.columns[i].align == 'right' ? 'right' : 'left',
                                        'width': info.columns[i].width > 0 ? info.columns[i].width + 'px' : '',
                                        'color': info.columns[i].color ? info.columns[i].color : '#383838',
                                        'fontWeight': info.columns[i].bold ? 'bold' : 'normal',
                                        'overflowX': 'hidden'
                                    })
                                    .html(info.columns[i].value);

                            if (info.columns[i].rawView) {
                                (function (v) {
                                    col.append(Dynamicweb.DebugPanel.Renderer.createLinkButton(Dynamicweb.DebugPanel.assets.terminology.rawView, {
                                        click: function () {
                                            Dynamicweb.DebugPanel.RawViewDialog.show(v);
                                        }
                                    })
                                    .attr({
                                        'class': 'dw-debug-conditional'
                                    })
                                    .css({
                                        'position': 'absolute',
                                        'left': '2px',
                                        'top': '2px',
                                        'display': 'none'
                                    }));
                                })(typeof (info.columns[i].rawViewValue) != 'undefined' ? info.columns[i].rawViewValue : info.columns[i].value);

                                col.css({
                                    'paddingLeft': '82px'
                                });

                                occupiedWidth += 82;

                                col.mouseenter(function (e) {
                                    $(e.target).find('a').show();
                                });

                                col.mouseleave(function (e) {
                                    $(e.target).find('a').hide();
                                });
                            }

                            if (info.columns[i].stretch) {
                                stretchingColumn = col;
                            } else if (info.columns[i].width > 0) {
                                occupiedWidth += info.columns[i].width;
                            }

                            ret.append(col);
                        }

                        occupiedWidth += 44;

                        if (stretchingColumn != null) {
                            stretchingColumn.addClass('dw-debug-content-stretch')
                                .attr({
                                    'data-occupied-width': occupiedWidth,
                                    'data-window-width': windowWidth
                                })
                                .css({
                                    'width': (windowWidth - occupiedWidth) + 'px'
                                });
                        }

                        ret.append($('<div></div>')
                            .css({
                                'width': '1px',
                                'height': '1px',
                                'visibility': 'hidden',
                                'clear': 'both'
                            }));

                        ret.mouseenter(function () {
                            $(this).css({
                                'backgroundColor': '#fff8de'
                            });
                        });

                        ret.mouseleave(function () {
                            var t = $(this);

                            t.css({
                                'backgroundColor': '#ffffff'
                            });

                            t.find('.dw-debug-conditional').hide();
                        });
                    }

                    return ret;
                },

                renderList: function (data, params) {
                    /// <summary>Creates a new list.</summary>
                    /// <param name="data">List data.</param>
                    /// <param name="params">Additional parameters.</param>

                    var ref = null;
                    var col = null;
                    var list = null;
                    var column = null;
                    var renderer = null;
                    var windowWidth = $(window).width();

                    if (!params) {
                        params = {};
                    }

                    if (data) {
                        renderer = Dynamicweb.DebugPanel.Renderer.listRowRenderers[params.renderer || params.id];

                        if (typeof (renderer) == 'string') {
                            renderer = Dynamicweb.DebugPanel.Renderer.listRowRenderers[renderer];
                        }

                        list = params.list;

                        if (!renderer) {
                            renderer = Dynamicweb.DebugPanel.Renderer.listRowRenderers['General'];
                        }

                        if (renderer) {
                            ref = data;

                            if (data.length) {
                                ref = data[0];
                            }

                            if (ref && (typeof (ref.tagName) != 'undefined' || typeof (ref.nodeName) != 'undefined')) {
                                // We're dealing with DOM element (TABLE)
                                $(data).find('tr').each(function (index) {
                                    renderer(this, index + 1, list, { windowWidth: windowWidth });
                                });
                            } else if (typeof (data.length) != 'undefined') {
                                // We're dealing with array of user objects
                                for (var i = 0; i < data.length; i++) {
                                    renderer(data[i], i + 1, list, { windowWidth: windowWidth });
                                }
                            }
                        }
                    }
                },

                createTab: function (id, params) {
                    /// <summary>Creates a new tab area.</summary>
                    /// <param name="id">Tab Id.</param>
                    /// <param name="params">Additional parameters.</param>

                    var ret = [];
                    var headerElement = null;
                    var headerItemsElement = null;
                    var tabClass = params.cssClass || '';

                    if (!params) {
                        params = {};
                    }

                    if (params.subHeader) {
                        headerElement = $('<div></div>')
                        .addClass('dw-debug-header-subheader')
                        .addClass(tabClass)
                        .css({
                            'font-family': 'Segoe UI, sans-serif',
                            'font-size': '13px',
                            'height': '20px',
                            'line-height': '20px',
                            'border': 'none',
                            'borderBottom': '1px solid #e7e7e7',
                            'backgroundColor': '#f8f8f8',
                            'margin': '0px',
                            'padding': '2px',
                            'paddingLeft': '8px'
                        });

                        headerItemsElement = $('<ul></ul>')
                        .css({
                            'list-style': 'none',
                            'margin': '0px',
                            'padding': '0px'
                        });

                        Dynamicweb.DebugPanel.Renderer.appendList(headerItemsElement, params.subHeader);

                        headerItemsElement.append($('<div></div>')
                                .css({
                                    'width': '1px',
                                    'height': '1px',
                                    'visibility': 'hidden',
                                    'clear': 'both'
                                }));

                        headerElement.append(headerItemsElement);
                        ret[ret.length] = headerElement;
                    }

                    ret[ret.length] = $('<div></div>')
                    .addClass(tabClass)
                    .css({
                        'font-family': 'Segoe UI, sans-serif',
                        'font-size': '13px',
                        'height': params.subHeader ? (params.statusText ? '199px' : '225px') : (params.statusText ? '224px' : '250px'),
                        'border': 'none',
                        'position': 'relative',
                        'backgroundColor': '#ffffff',
                        'margin': '0px',
                        'padding': '6px',
                        'overflow': 'auto',
                        'overflowX': 'hidden',
                        'display': params.visible ? 'block' : 'none'
                    });

                    if (params.statusText) {
                        ret[ret.length] = $('<div></div>')
                            .addClass(tabClass)
                            .addClass('dw-debug-tab-status')
                            .css({
                                'font-family': 'Segoe UI, sans-serif',
                                'font-size': '13px',
                                'height': '25px',
                                'lineHeight': '25px',
                                'overflow': 'hidden',
                                'border': 'none',
                                'borderTop': '1px solid #e7e7e7',
                                'backgroundColor': '#f8f8f8',
                                'backgroundImage': 'url(' + Dynamicweb.DebugPanel.assets.images.information_small + ')',
                                'backgroundRepeat': 'no-repeat',
                                'backgroundPosition': '6px 5px',
                                'margin': '0px',
                                'padding': '0px',
                                'fontWeight': 'bold',
                                'color': '#9a9a9a',
                                'paddingLeft': '28px',
                                'display': params.visible ? 'block' : 'none'
                            })
                            .text(params.statusText);
                    }

                    return ret;
                },

                createHeaderButton: function (text, handler, params) {
                    /// <summary>Makes a top link.</summary>
                    /// <param name="text">Link text.</param>
                    /// <param name="handler">"Click" event handler.</param>
                    /// <param name="params">Additional parameters.</param>

                    var height = 20;

                    if (!params) {
                        params = {};
                    }

                    if (params.height != null && !isNaN(params.height)) {
                        height = params.height;
                    }

                    var ret = $('<li></li>')
                    .css({
                        'float': 'left',
                        'margin': '0px',
                        'padding': '0px',
                        'marginRight': '15px',
                        'height': height + 'px',
                        'lineHeight': height + 'px'
                    }).append($('<a></a>')
                        .attr({
                            'href': 'javascript:void(0);',
                            'id': params.id && params.id.length ? params.id : ''
                        })
                        .addClass(params.cssClass || '')
                        .css({
                            'font-family': 'Segoe UI, sans-serif',
                            'font-size': '13px',
                            'color': '#1ba4d7',
                            'display': 'block',
                            'height': height + 'px',
                            'lineHeight': height + 'px',
                            'textDecoration': 'none',
                            'margin': '0px',
                            'padding': '0px',
                            'paddingRight': params.image && params.image.length ? '6px' : '0px',
                            'border': 'none',
                            'borderLeft': '1px solid transparent',
                            'borderRight': '1px solid transparent',
                            'outline': 'none',
                            'backgroundRepeat': 'no-repeat',
                            'backgroundPosition': '4px 1px',
                            'textShadow': '#ffffff 0px -1px 0px',
                            'fontWeight': params.bold ? 'bold' : 'normal',
                            'paddingLeft': params.image && params.image.length ? '40px' : '0px',
                            'backgroundImage': params.image && params.image.length ? 'url(' + params.image + ')' : 'none'
                        })
                        .html(text)
                        .click(handler));

                    return ret;
                }
            },

            Parser: {
                isTemplateTagsTable: function (table) {
                    /// <summary>Returns value indicating whether given table contains template tags rather than other debug information.</summary>
                    /// <param name="table">Table to examine.</param>

                    var text = '';
                    var ret = false;
                    var columns = [];

                    if (table) {
                        columns = $(table).find('tr:first td');
                        if (columns && columns.length) {
                            for (var i = 0; i < columns.length; i++) {
                                text = $(columns[i]).text();

                                if (text && text.length) {
                                    ret = text.toLowerCase() == 'tag';
                                    if (ret) {
                                        break;
                                    }
                                }
                            }
                        }
                    }

                    return ret;
                },

                filterTemplateTagsTables: function (tables) {
                    /// <summary>Filters out template tags tables from the given list of tables.</summary>
                    /// <param name="tables">Tables to examine.</param>

                    var ret = [];

                    if (tables && tables.length) {
                        for (var i = 0; i < tables.length; i++) {
                            if (!Dynamicweb.DebugPanel.Parser.isTemplateTagsTable(tables[i])) {
                                ret[ret.length] = tables[i];
                            }
                        }
                    }

                    return ret;
                },

                parseTemplateTags: function (params) {
                    /// <summary>Parses template tags.</summary>
                    /// <param name="params">Parse parameters.</param>

                    var ret = [];
                    var tables = null;
                    var previous = null;
                    var previousStyle = '';

                    if (!params) {
                        params = {};
                    }

                    tables = $(document).find('table');

                    if (tables && tables.length) {
                        for (var i = 0; i < tables.length; i++) {
                            if (Dynamicweb.DebugPanel.Parser.isTemplateTagsTable(tables[i])) {
                                ret[ret.length] = tables[i];

                                previous = $(tables[i]).prev();

                                if (previous && previous.length && (previous[0].nodeName || previous[0].tagName || '').toLowerCase() == 'div') {
                                    previousStyle = previous.attr('style');

                                    if (previousStyle && previousStyle.length) {
                                        if (previousStyle.toLowerCase().indexOf('clear:') >= 0 || previousStyle.toLowerCase().indexOf('both') >= 0) {
                                            $(previous).remove();
                                        }
                                    }
                                }
                            }
                        }
                    }

                    return ret;
                },

                parseExecutionNotice: function (params) {
                    /// <summary>Parses execution notice.</summary>
                    /// <param name="params">Parse parameters.</param>

                    var targetNode = null;
                    var ret = { text: '' };
                    var children = document.body.childNodes;

                    if (!params) {
                        params = {};
                    }

                    if (children && children.length) {
                        for (var i = children.length - 1; i >= 0; i--) {
                            if (children[i].nodeType == 3 && children[i].nodeValue && children[i].nodeValue.toLowerCase().indexOf('exe time:') >= 0) {
                                targetNode = children[i];
                                ret.text = children[i].nodeValue;

                                break;
                            }
                        }
                    }

                    if (typeof (params.cleanup) == 'undefined' || params.cleanup == null || !!params.cleanup) {
                        if (targetNode != null) {
                            targetNode.parentNode.removeChild(targetNode);
                        }
                    }

                    if (ret.text && ret.text.length) {
                        ret.text = ret.text.replace(/<!--\s?/g, '');
                        ret.text = ret.text.replace(/\s?-->/g, '');
                    }

                    return ret;
                },

                parseDatabaseStatistics: function (params) {
                    /// <summary>Parses database statistics.</summary>
                    /// <param name="params">Parse parameters.</param>

                    var i = 0;
                    var ret = [];
                    var n = null;
                    var tag = '';
                    var query = '';
                    var children = [];
                    var current = null;
                    var parsedNodes = [];
                    var canParse = false;
                    var targetNodes = [];
                    var newlyCreated = false;
                    var whitespace = /^\s*$/;
                    var isTargetNode = false;
                    var queryPrefix = '(sql: ';
                    var queryIndexPrefix = 'query text:';
                    var queriesByType = { sql: [], index: [] };

                    var trim = function (str) {
                        var ws = /\s/;
                        var i = str.length;

                        str = str.replace(/^\s\s*/, '');

                        while (ws.test(str.charAt(--i)));
                        return str.slice(0, i + 1);
                    }

                    if (!params) {
                        params = {};
                    }

                    // only if we're debugging
                    if (location.href.toLowerCase().indexOf('dbstat=true') >= 0) {
                        children = document.body.childNodes;

                        if (children && children.length) {
                            for (i = 0; i < children.length; i++) {
                                tag = '';
                                n = children[i];
                                canParse = false;
                                isTargetNode = false;

                                if (n.nodeType == 3) {
                                    isTargetNode = true;
                                    canParse = !whitespace.test(n.nodeValue);
                                } else {
                                    tag = (n.nodeName || n.tagName || '').toLowerCase();
                                    if (tag == 'br' || tag == 'hr') {
                                        canParse = true;
                                        isTargetNode = true;
                                    }
                                }

                                if (canParse) {
                                    if (!tag || !tag.length || tag != 'br') {
                                        targetNodes[targetNodes.length] = {
                                            text: n.nodeType == 3 ? n.nodeValue : '',
                                            isSeparator: tag && tag.length && tag == 'hr'
                                        };
                                    }

                                    parsedNodes[parsedNodes.length] = n;
                                } else if (!isTargetNode) {
                                    break;
                                }
                            }
                        }

                        if (targetNodes && targetNodes.length) {
                            i = 0;

                            while (i < targetNodes.length) {
                                if (targetNodes[i].isSeparator) {
                                    if (current) {
                                        queriesByType[current.type][queriesByType[current.type].length] = current;

                                        current = null;
                                        newlyCreated = false;
                                    }

                                    i++;
                                } else {
                                    if (!current) {
                                        current = { message: '', query: '', stack: '' };
                                        newlyCreated = true;
                                    }

                                    if (newlyCreated) {
                                        newlyCreated = false;
                                        current.message = trim(targetNodes[i].text);

                                        if (current.message.lastIndexOf(':') == (current.message.length - 1)) {
                                            current.message += ' ...';
                                        }

                                        if (i < (targetNodes.length - 1) && !targetNodes[i + 1].isSeparator) {
                                            i++;
                                            query = trim(targetNodes[i].text);

                                            current.query = query;

                                            if (current.query.toLowerCase().indexOf(queryPrefix) == 0) {
                                                current.query = current.query.substr(queryPrefix.length);

                                                if (current.query.lastIndexOf(')') == (current.query.length - 1)) {
                                                    current.query = current.query.substr(0, current.query.length - 1);
                                                }
                                            }

                                            current.type = 'sql';

                                            if (current.query.toLowerCase().indexOf(queryIndexPrefix) == 0) {
                                                current.query = current.query.substr(queryIndexPrefix.length);

                                                current.type = 'index';
                                            }

                                            current.query = trim(current.query);

                                            i++;
                                        }
                                    } else {
                                        current.stack += (trim(targetNodes[i].text) + '\n').replace(/\n+/g, '\n');
                                        i++;
                                    }
                                }
                            }

                            if (current != null) {
                                queriesByType[current.type][queriesByType[current.type].length] = current;
                            }

                            for (var prop in queriesByType) {
                                if (typeof (queriesByType[prop]) != 'function') {
                                    ret[ret.length] = { type: prop, queries: queriesByType[prop] };
                                }
                            }

                            if (typeof (params.cleanup) == 'undefined' || params.cleanup == null || !!params.cleanup) {
                                for (i = 0; i < parsedNodes.length; i++) {
                                    parsedNodes[i].parentNode.removeChild(parsedNodes[i]);
                                }
                            }
                        }
                    }

                    return ret;
                },

                parseDebugElements: function (params) {
                    /// <summary>Returns an array of TABLE elements representing a set of debug information.</summary>
                    /// <param name="params">Parse parameters.</param>

                    var ret = [];
                    var tables = null;
                    var currentTable = null;

                    if (!params) {
                        params = {};
                    }

                    // only if we're debugging
                    if (location.href.toLowerCase().indexOf('debug=true') >= 0) {
                        tables = $(document).find('table');

                        if (tables && tables.length) {
                            tables = Dynamicweb.DebugPanel.Parser.filterTemplateTagsTables(tables);

                            // Getting the last TABLE element in a matched sequence
                            currentTable = $(tables[tables.length - 1]);

                            // Collecting TABLE elements as long as they precede each other
                            do {
                                ret[ret.length] = currentTable;

                                currentTable = currentTable.prev();
                                if (!currentTable.length || currentTable[0].nodeName.toLowerCase() != 'table') {
                                    break;
                                }
                            } while (true);
                        }

                        // Need them in a document order
                        ret.reverse();
                    }

                    return ret;
                }
            },

            RawViewDialog: {
                show: function (value) {
                    /// <summary>Displays the given value in a raw view dialog.</summary>
                    /// <param name="value">Value to display.</param>

                    var field = null;
                    var container = $('#dw_debug_rawview');

                    if (!container || !container.length) {
                        container = $('<div></div>')
                            .attr({
                                'id': 'dw_debug_rawview',
                                'class': 'dw_debug_rawview'
                            })
                            .css({
                                'position': 'absolute',
                                'zIndex': '1000',
                                'width': '700px',
                                'height': '500px',
                                'font-family': 'Segoe UI, sans-serif',
                                'font-size': '13px',
                                'border': '1px solid #1AB4F0',
                                'backgroundColor': '#f4f4f4',
                                'boxShadow': '#a9a9a9 0px 0px 20px',
                                'margin': '0px',
                                'padding': '0px',
                                'overflow': 'hidden',
                                'display': 'none'
                            })
                            .appendTo(document.body);

                        container.append($('<div></div>')
                            .css({
                                'fontWeight': 'bold',
                                'cursor': 'default',
                                'float': 'left',
                                'margin': '0px',
                                'color': '#383838',
                                'marginLeft': '8px',
                                'marginTop': '5px',
                                'padding': '0px',
                                'font-size': '15px',
                                'font-family': 'Segoe UI, sans-serif',
                                'textShadow': '#ffffff 0px -1px 0px'
                            })
                            .html(Dynamicweb.DebugPanel.assets.terminology.rawView)
                        );
                        container.append($('<a></a>')
                            .click(function (e) {
                                Dynamicweb.DebugPanel.RawViewDialog.hide();
                                e.stopPropagation();
                            })
                            .addClass('dw-debug-rawview-close')
                            .attr({
                                'id': 'dw_debug_panel_close',
                                'href': 'javascript:void(0);',
                                'title': Dynamicweb.DebugPanel.assets.terminology.close
                            })
                            .css({
                                'color': '#7ed3f3',
                                'float': 'right',
                                'width': '32px',
                                'height': '32px',
                                'text-decoration': 'none',
                                'margin': '0px',
                                'padding': '0px',
                                'border': 'none',
                                'outline': 'none'
                            }).append($('<img />')
                                .attr({
                                    'src': Dynamicweb.DebugPanel.assets.images.close
                                })
                                .css({
                                    'margin': '0px',
                                    'padding': '0px',
                                    'border': 'none',
                                    'width': '32px',
                                    'height': '32px'
                                })))
                            .append($('<div></div>')
                            .css({
                                'width': '1px',
                                'height': '1px',
                                'visibility': 'hidden',
                                'clear': 'both'
                            }));

                        field = $('<textarea></textarea>')
                            .attr({
                                'spellcheck': 'false',
                                'wrap': 'off'
                            })
                            .css({
                                'border': '1px solid #dddddd',
                                'backgroundColor': '#ffffff',
                                'display': 'block',
                                'color': '#383838',
                                'fontWeight': 'normal',
                                'width': '680px',
                                'height': '453px',
                                'margin': '0px auto',
                                'padding': '0px',
                                'marginTop': '2px',
                                'resize': 'none'
                            })
                            .appendTo(container);
                    }

                    if (container && container.length) {
                        if (!field || !field.length) {
                            field = container.find('textarea');
                        }

                        field.val(value);

                        container.show();
                        this.center();
                    }
                },

                hide: function () {
                    /// <summary>Hides the dialog.</summary>

                    $('#dw_debug_rawview').hide();
                },

                center: function () {
                    /// <summary>Centers the dialog.</summary>

                    var w = null;
                    var container = $('#dw_debug_rawview');
                    var windowWidth = 0, windowHeight = 0, scrollLeft = 0, scrollTop = 0;

                    if (container && container.css('display') != 'none') {
                        w = $(window);
                        windowWidth = w.width();
                        windowHeight = w.height();
                        scrollLeft = w.scrollLeft();
                        scrollTop = w.scrollTop();

                        container.css({
                            'top': (((windowHeight - container.height()) / 2) + scrollTop) + 'px',
                            'left': (((windowWidth - container.width()) / 2) + scrollLeft) + 'px'
                        });
                    }
                }
            },

            initialize: function () {
                /// <summary>Initializes the debug panel.</summary>

                var c = null;
                var tabs = null;
                var tables = null;
                var content = null;
                var queries = null;
                var tabState = null;
                var tabDatabase = null;
                var templateTags = null;
                var resizeTimeout = null;
                var tabPerformance = null;
                var executionNotice = null;
                var tabTemplateTags = null;

                // Allowing to disable the "pretty" view
                if (location.href.toLowerCase().indexOf('debug_plain=true') < 0) {
                    tables = Dynamicweb.DebugPanel.Parser.parseDebugElements();
                    templateTags = Dynamicweb.DebugPanel.Parser.parseTemplateTags();
                    queries = Dynamicweb.DebugPanel.Parser.parseDatabaseStatistics();
                    executionNotice = Dynamicweb.DebugPanel.Parser.parseExecutionNotice();

                    if ((tables && tables.length) || (queries && queries.length) || (templateTags && templateTags.length)) {
                        c = this.container();

                        if (c) {
                            tabs = $('<ul></ul>')
                                .css({
                                    'list-style': 'none',
                                    'margin': '0px',
                                    'padding': '0px'
                                });

                            if (tables && tables.length) {
                                tabs.append(Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.performance, function () { Dynamicweb.DebugPanel.tab('Performance'); }, {
                                    cssClass: 'dw-debug-tab-performance dw-debug-tabheader',
                                    height: 34,
                                    bold: true,
                                    image: this.assets.images.performance
                                }), Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.state, function () { Dynamicweb.DebugPanel.tab('State'); }, {
                                    cssClass: 'dw-debug-tab-state dw-debug-tabheader',
                                    height: 34,
                                    bold: true,
                                    image: this.assets.images.state
                                }));
                            }

                            if (queries && queries.length) {
                                tabs.append(Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.database, function () { Dynamicweb.DebugPanel.tab('Database'); }, {
                                    cssClass: 'dw-debug-tab-database dw-debug-tabheader',
                                    height: 34,
                                    bold: true,
                                    image: this.assets.images.database
                                }));
                            }

                            if (templateTags && templateTags.length) {
                                tabs.append(Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.templateTags, function () { Dynamicweb.DebugPanel.tab('TemplateTags'); }, {
                                    cssClass: 'dw-debug-tab-templatetags dw-debug-tabheader',
                                    height: 34,
                                    bold: true,
                                    image: this.assets.images.templateTags
                                }));
                            }

                            $('<div></div>')
                            .addClass('dw-debug-header')
                            .attr({
                                'id': 'dw_debug_panel_header'
                            })
                            .css({
                                'height': '34px',
                                'line-height': '34px',
                                'border': 'none',
                                'borderBottom': '1px solid #d7d7d7',
                                'backgroundColor': '#f4f4f4',
                                'margin': '0px',
                                'padding': '0px',
                                'paddingLeft': '6px',
                                'backgroundRepeat': 'repeat-x',
                                'backgroundPosition': '0px 0px',
                                'backgroundImage': 'url(' + this.assets.images.header + ')'
                            })
                            .append(tabs)
                            .append($('<a></a>')
                                .click(function (e) {
                                    Dynamicweb.DebugPanel.close();

                                    e.stopPropagation();
                                })
                                .addClass('dw-debug-close')
                                .attr({
                                    'id': 'dw_debug_panel_close',
                                    'href': 'javascript:void(0);',
                                    'title': this.assets.terminology.close
                                })
                                .css({
                                    'color': '#7ed3f3',
                                    'float': 'right',
                                    'width': '32px',
                                    'height': '32px',
                                    'text-decoration': 'none',
                                    'margin': '0px',
                                    'padding': '0px',
                                    'border': 'none',
                                    'outline': 'none'
                                }).append($('<img />')
                                    .attr({
                                        'src': this.assets.images.close
                                    })
                                    .css({
                                        'margin': '0px',
                                        'padding': '0px',
                                        'border': 'none',
                                        'width': '32px',
                                        'height': '32px'
                                    })))
                            .append($('<div></div>')
                                .css({
                                    'width': '1px',
                                    'height': '1px',
                                    'visibility': 'hidden',
                                    'clear': 'both'
                                }))
                            .appendTo(c);

                            content = $('<div></div>')
                            .addClass('dw-debug-content')
                            .attr({
                                'id': 'dw_debug_panel_content'
                            })
                            .css({
                                'height': '262px',
                                'border': 'none',
                                'backgroundColor': '#ffffff',
                                'margin': '0px',
                                'padding': '0px',
                                'overflow': 'hidden'
                            })
                            .appendTo(c);

                            if (tables && tables.length) {
                                // Tab - "Performance"
                                tabPerformance = Dynamicweb.DebugPanel.Renderer.createTab('Performance', {
                                    subHeader: [
                                        Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.expandAll, function () { Dynamicweb.DebugPanel.expandAll(); }),
                                        Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.collapseAll, function () { Dynamicweb.DebugPanel.collapseAll(); })
                                    ],

                                    cssClass: 'dw-debug-tab-performance dw-debug-tab',
                                    visible: true,
                                    statusText: executionNotice && executionNotice.text ? executionNotice.text : this.assets.terminology.ready
                                });

                                // Tab - "State"
                                tabState = Dynamicweb.DebugPanel.Renderer.createTab('State', {
                                    subHeader: [
                                        Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.expandAll, function () { Dynamicweb.DebugPanel.expandAll(); }),
                                        Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.collapseAll, function () { Dynamicweb.DebugPanel.collapseAll(); })
                                    ],

                                    cssClass: 'dw-debug-tab-state dw-debug-tab',
                                    visible: false,
                                    statusText: executionNotice && executionNotice.text ? executionNotice.text : this.assets.terminology.ready
                                });

                                Dynamicweb.DebugPanel.Renderer.appendList(content, tabPerformance);
                                Dynamicweb.DebugPanel.Renderer.appendList(content, tabState);

                                Dynamicweb.DebugPanel.Renderer.appendList(tabPerformance[1], Dynamicweb.DebugPanel.Renderer.createList(tables[0], { id: 'PageExecution', name: this.assets.terminology.pageExecution }));
                                Dynamicweb.DebugPanel.Renderer.appendList(tabState[1], Dynamicweb.DebugPanel.Renderer.createList(tables[1], { id: 'AreaValues', name: this.assets.terminology.areaValues }));
                                Dynamicweb.DebugPanel.Renderer.appendList(tabState[1], Dynamicweb.DebugPanel.Renderer.createList(tables[2], { id: 'PageValues', name: this.assets.terminology.pageValues }));
                                Dynamicweb.DebugPanel.Renderer.appendList(tabState[1], Dynamicweb.DebugPanel.Renderer.createList(tables[3], { id: 'StylesheetValues', name: this.assets.terminology.stylesheetValues }));
                                Dynamicweb.DebugPanel.Renderer.appendList(tabState[1], Dynamicweb.DebugPanel.Renderer.createList(tables[4], { id: 'TemplateValues', name: this.assets.terminology.templateValues }));
                                Dynamicweb.DebugPanel.Renderer.appendList(tabState[1], Dynamicweb.DebugPanel.Renderer.createList(tables[5], { id: 'Navigations', name: this.assets.terminology.navigations }));
                                Dynamicweb.DebugPanel.Renderer.appendList(tabState[1], Dynamicweb.DebugPanel.Renderer.createList(tables[tables.length - 1], { id: 'OtherValues', name: this.assets.terminology.otherValues }));

                                for (var i = 6; i < (tables.length - 1); i++) {
                                    Dynamicweb.DebugPanel.Renderer.appendList(tabState[1], Dynamicweb.DebugPanel.Renderer.createList(tables[i], { id: 'GeneratedList' + (i - 5), name: this.assets.terminology.generatedList + ' #' + (i - 5) }));
                                }
                            }

                            if (queries && queries.length) {
                                // Tab - "Database"
                                tabDatabase = Dynamicweb.DebugPanel.Renderer.createTab('Database', {
                                    subHeader: [
                                        Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.expandAll, function () { Dynamicweb.DebugPanel.expandAll(); }),
                                        Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.collapseAll, function () { Dynamicweb.DebugPanel.collapseAll(); })
                                    ],

                                    cssClass: 'dw-debug-tab-database dw-debug-tab',
                                    visible: false,
                                    statusText: executionNotice && executionNotice.text ? executionNotice.text : this.assets.terminology.ready
                                });

                                for (var i = 0; i < queries.length; i++) {
                                    Dynamicweb.DebugPanel.Renderer.appendList(tabDatabase[1], Dynamicweb.DebugPanel.Renderer.createList(queries[i].queries, { id: 'Database_' + queries[i].type, name: this.assets.terminology['database_' + queries[i].type], dataInDom: false }));
                                }

                                Dynamicweb.DebugPanel.Renderer.appendList(content, tabDatabase);
                            }

                            if (templateTags && templateTags.length) {
                                // Tab - "Template tags"
                                tabTemplateTags = Dynamicweb.DebugPanel.Renderer.createTab('TemplateTags', {
                                    subHeader: [
                                        Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.expandAll, function () { Dynamicweb.DebugPanel.expandAll(); }),
                                        Dynamicweb.DebugPanel.Renderer.createHeaderButton(this.assets.terminology.collapseAll, function () { Dynamicweb.DebugPanel.collapseAll(); })
                                    ],

                                    cssClass: 'dw-debug-tab-templatetags dw-debug-tab',
                                    visible: false,
                                    statusText: executionNotice && executionNotice.text ? executionNotice.text : this.assets.terminology.ready
                                });

                                for (var i = 0; i < templateTags.length; i++) {
                                    Dynamicweb.DebugPanel.Renderer.appendList(tabTemplateTags[1], Dynamicweb.DebugPanel.Renderer.createList(templateTags[i], { id: 'TemplateTags_' + i, name: this.assets.terminology.generatedList + ' #' + (i + 1), renderer: 'TemplateTags' }));
                                }

                                Dynamicweb.DebugPanel.Renderer.appendList(content, tabTemplateTags);
                            }

                            c.show();

                            $(window).resize(function () {
                                if (resizeTimeout) {
                                    clearTimeout(resizeTimeout);
                                    resizeTimeout = null;
                                }

                                resizeTimeout = setTimeout(function () {
                                    Dynamicweb.DebugPanel.resize();
                                }, 20);
                            });

                            this.tab(tables && tables.length ? 'Performance' : (queries && queries.length ? 'Database' : 'TemplateTags'));
                        }
                    }
                }
            },

            container: function () {
                var ret = $('#dw_debug_panel');

                if (!ret || !ret.length) {
                    ret = $('<div></div>')
                        .addClass('dw-debug')
                        .attr({
                            'id': 'dw_debug_panel'
                        })
                        .css({
                            'font-family': 'Segoe UI, sans-serif',
                            'font-size': '13px',
                            'color': '#383838',
                            'position': 'fixed',
                            'zIndex': '999',
                            'bottom': '0px',
                            'left': '0px',
                            'right': '0px',
                            'height': '300px',
                            'margin': '0px',
                            'padding': '0px',
                            'backgroundColor': '#fff',
                            'border': 'none',
                            'borderTop': '1px solid #1ab4f0',
                            'display': 'none'
                        })
                        .appendTo(document.body);
                }

                return ret;
            },

            tab: function (id) {
                /// <summary>Activates the given tab.</summary>
                /// <param name="id">Tab Id.</param>

                var c = $(this.container());

                c.find('.dw-debug-tab').each(function () {
                    var t = $(this);

                    if (t.hasClass('dw-debug-tab-' + id.toLowerCase())) {
                        t.show();
                    } else {
                        t.hide();
                    }
                });

                c.find('a.dw-debug-tabheader').each(function () {
                    var t = $(this);

                    if (t.hasClass('dw-debug-tab-' + id.toLowerCase())) {
                        t.css({
                            'height': '35px',
                            'backgroundColor': '#f8f8f8',
                            'borderLeft': '1px solid #d7d7d7',
                            'borderRight': '1px solid #d7d7d7'
                        });
                    } else {
                        t.css({
                            'height': '34px',
                            'backgroundColor': 'transparent',
                            'borderLeft': '1px solid transparent',
                            'borderRight': '1px solid transparent'
                        });
                    }
                });
            },

            open: function () {
                /// <summary>Re-opens the panel.</summary>

                var c = this.container();

                if (c) {
                    c.show();
                }
            },

            close: function () {
                /// <summary>Closes the panel.</summary>

                var c = this.container();

                if (c) {
                    c.hide();
                }
            },

            expandAll: function () {
                /// <summary>Expands all lists.</summary>

                $(this.container()).find('.dw-debug-list').each(function () {
                    var t = $(this);

                    if (t.parents('.dw-debug-tab:visible').length) {
                        Dynamicweb.DebugPanel.expand(t.attr('data-list-id'));
                    }
                });
            },

            collapseAll: function () {
                /// <summary>Collapses all lists.</summary>

                $(this.container()).find('.dw-debug-list').each(function () {
                    var t = $(this);

                    if (t.parents('.dw-debug-tab:visible').length) {
                        Dynamicweb.DebugPanel.collapse(t.attr('data-list-id'));
                    }
                });
            },

            expand: function (id) {
                /// <summary>Expands the given list.</summary>
                /// <param name="id">List Id.</param>

                var link = $('#dw_debug_' + id);

                link.css({
                    'backgroundImage': 'url(' + this.assets.images.collapse + ')'
                });

                link.next('ul').show();

                // Triggering custom "expand" event so the contents of the list is rendered if needed
                link.trigger('expand');
            },

            collapse: function (id) {
                /// <summary>Collapses the given list.</summary>
                /// <param name="id">List Id.</param>

                var link = $('#dw_debug_' + id);

                link.css({
                    'backgroundImage': 'url(' + this.assets.images.expand + ')'
                });

                link.next('ul').hide();
            },

            toggle: function (id) {
                /// <summary>Toggles the given list's "Expanded" state.</summary>
                /// <param name="id">List Id.</param>

                var link = $('#dw_debug_' + id);

                if (link.next('ul').css('display') == 'none') {
                    this.expand(id);
                } else {
                    this.collapse(id);
                }
            },

            resize: function () {
                /// <summary>Resizes the panel according to the current window width.</summary> 

                var windowWidth = $(window).width();

                $(this.container()).find('.dw-debug-content-stretch').each(function () {
                    var elm = $(this);
                    var occupiedWidth = parseInt(elm.attr('data-occupied-width'));

                    elm.css({ 'width': (windowWidth - occupiedWidth) + 'px' })
                        .attr({
                            'data-window-width': windowWidth
                        });
                });

                Dynamicweb.DebugPanel.RawViewDialog.center();
            }
        }

        $(document).ready(function () {
            Dynamicweb.DebugPanel.initialize();
        });
    })(jQuery);
}