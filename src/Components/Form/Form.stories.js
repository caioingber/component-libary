import React from 'react';
import { storiesOf } from '@storybook/react';


import Form from './Form'

storiesOf("Form", module)
    .add('Text Input Small', () => <Form 
        label="Email"
        type="text"
    />
    )
    .add('Text Input Medium', () => <Form 
        label="Email"
        type="text"
        medium
    />
    )
    .add('Text Input Large', () => <Form 
        label="Email"
        type="text"
        large
    />
    )
    .add('Select Input Small Outline Outline', () => <Form
        label="Select"
        type="select"
        select
        outline
    />
    )
    .add('Select Input Medium Outline', () => <Form 
        label="Select"
        type="select"
        select
        medium
        outline
    />
    )
    .add('Select Input Large Outline', () => <Form 
        label="Select"
        type="select"
        select
        large
        outline
    />
    )
    .add('Select Input Small Filled', () => <Form
        label="Select"
        type="select"
        select
        filled
    />
    )
    .add('Select Input Medium Filled', () => <Form 
        label="Select"
        type="select"
        select
        medium
        filled
    />
    )
    .add('Select Input Large Filled', () => <Form 
        label="Select"
        type="select"
        select
        large
        filled
    />
    )