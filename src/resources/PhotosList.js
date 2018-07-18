import React from 'react';
import { Filter, List, Datagrid, BooleanField, DateField, ImageField, TextField, TextInput } from 'react-admin';

const PhotosFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="search" alwaysOn />
    </Filter>
);

export const PhotosList = (props) => (
    <List {...props} filters={<PhotosFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="image" title="image" />
            <TextField source="caption" />
            <TextField source="user_id" />
            <TextField source="post_id" />
            <BooleanField source="featured" />
            <DateField source="created_at.date" />
            <DateField source="updated_at.date" />
        </Datagrid>
    </List>
);