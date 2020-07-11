import React, { forwardRef } from 'react';
import { Card, CardContent, Typography  } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
    const userLogin = username === message.username
    return (
        <div ref={ref} className={`message ${userLogin && 'message__user'}`}>
            <Card className={ userLogin ? "message__userCard" : "message__guestCard" }>
                <CardContent>
                    <Typography color="textSecondary" variant="h5" component="h2">
                        {!userLogin && `${message.username || 'Unkow User'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
