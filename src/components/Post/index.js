import React from 'react'
import { Card } from 'antd'

function Post({title, body}) {
    return (
        <Card>
            <h1>{title}</h1>
            <p>{body}</p>
        </Card>
    )
}

export default Post