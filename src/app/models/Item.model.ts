export class Item {
    _id: number;
    name: string;
    sortOrder: number;
    itemVariants: ItemVariant[];
    actions: ActionVariant[];
}

export class ItemVariant {
    _id: number;
    name: string;
    description: string;
    serviceType: string [];
    businessTypes: string[];
}

export class ActionVariant {
    name: string;
    actionsVariant: ItemVariant
}