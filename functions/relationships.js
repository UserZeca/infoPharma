
async function oneToMany(ReferenceElement, Element, foreingKey, onUpdate='CASCADE', onDelete='CASCADE'){
    ReferenceElement.hasMany(Element, {     // Uma categoria tem muitos videos
        foreingKey: foreingKey,
        onUpdate: onUpdate,
        onDelete: onDelete,
        allowNull: false
    });
    Element.belongsTo(ReferenceElement);
}


module.exports = {
    oneToMany: oneToMany
}