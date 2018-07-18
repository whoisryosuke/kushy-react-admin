import React from 'react';
import { Filter, List, Datagrid, BooleanField, DateField, ImageField, TextField, TextInput } from 'react-admin';

const ProductsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="search" alwaysOn />
    </Filter>
);

export const ProductsList = (props) => (
    <List {...props} filters={<ProductsFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="featured_img" title="image" />
            <TextField source="name" />
            <TextField source="description" />
            <BooleanField source="featured" />
            <DateField source="created_at.date" />
            <DateField source="updated_at.date" />
        </Datagrid>
    </List>
);