var nodePath = require('path');

exports.check = function(taglibLoader, expect) {
    var taglib = taglibLoader.load(nodePath.join(__dirname, 'marko.json'));
    expect(taglib != null).to.equal(true);

    var shorthandCheckbox = taglib.tags['shorthand-checkbox'];
    expect(shorthandCheckbox.attributes.checked.type).to.equal('boolean');
    expect(shorthandCheckbox.attributes.label.type).to.equal('string');
    expect(shorthandCheckbox.nestedTags.label.type).to.equal('string');
    expect(shorthandCheckbox.nestedTags.foo.type).to.equal('object');

    var shorthandTabsTag = taglib.tags['shorthand-tabs'];
    expect(shorthandTabsTag.attributes.orientation != null).to.equal(true);
    expect(shorthandTabsTag.attributes.orientation.type).to.equal('string');
    expect(shorthandTabsTag.attributes.tabs.type).to.equal('expression');

    var nestedTabTag = shorthandTabsTag.nestedTags.tab;
    expect(nestedTabTag.attributes.label != null).to.equal(true);
    expect(nestedTabTag.isRepeated).to.equal(true);
    expect(nestedTabTag.targetProperty).to.equal('tabs');
};