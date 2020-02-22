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
    />
    )
    .add('Text Input Large', () => <Form 
        label="Email"
        type="text"
    />
    )
    .add('Select Input Small', () => <Form 
        select
    />
    )
    .add('Select Input Medium', () => <Form 
        select
    />
    )
    .add('Select Input Large', () => <Form 
        select
    />
    )