import React from 'react';
import { List, Datagrid, ImageField, TextField } from 'react-admin';

export const StrainsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="featured_img" title="image" />
            <TextField source="name" />
            <TextField source="description" />
        </Datagrid>
    </List>
);