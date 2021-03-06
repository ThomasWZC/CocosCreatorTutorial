cc.Class({
    extends: cc.Component,

    properties: {
        horizontal: cc.ScrollView,
        vertical: cc.ScrollView,
        grid: cc.ScrollView,
        item: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        // this.label.string = this.text;
        this.horizontal.node.active = true;
        this.vertical.node.active = false;
        this.grid.node.active = false;
    },

    onBtnClicked(event, customData) {
        console.log('customData=', customData);
        this.horizontal.node.active = false;
        this.vertical.node.active = false;
        this.grid.node.active = false;
        var node = this.node.getChildByName(customData);
        switch (node.name) {
            case 'horizontal': {
                this.horizontal.node.active = true;
                this.onAddItem(this.horizontal, this.item);
                break;
            }
            case 'vertical': {
                this.vertical.node.active = true;
                this.onAddItem(this.vertical, this.item);
                break;
            }
            case 'grid': {
                this.grid.node.active = true;
                this.onAddItem(this.grid, this.item);
                break;
            }
        }
    },

    onAddItem(scrollView, item) {
        console.log(scrollView.node);
        var contentNode = scrollView.node.getChildByName('view').getChildByName('content');
        var child = cc.instantiate(item);
        contentNode.addChild(child);
    },

    // called every frame
    update: function (dt) {

    },
});
