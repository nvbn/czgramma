import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default ({goRandom}) => (
  <Card>
    <CardHeader title="Bohužel nenalezeno"
                textStyle={{fontWeight: 'bold'}}/>
    <CardActions>
      <FlatButton label="Přejít na náhodné" onClick={goRandom}/>
    </CardActions>
  </Card>
);
