import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/lazy';
import { Route, Switch } from 'react-router-dom';

import ShootingStar from '../../../assets/icons/shooting-stars.png';

import './style.scss';

const SharedView = ({ roomImage, fileURL }) => {
  return (
    <div className="shared-view">
      {/* {!fileURL ? <img className="shared-view-picture" src={`https://undefined-project.tk/api/uploads/files/${roomImage}`} alt="unknown" /> : <img className="shared-view-picture" src={fileURL} alt="unknown" />} */}
      <div className="shared-view-media">
          <Switch>
            <Route path="/room/shareview">
              {<img className="share-picture" src={fileURL} alt="unknown" />}
            </Route>
            <Route path="/room/hoglib" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=pAHciSqi1-8" width="100%" height="100%" />
            </Route>
            <Route path="/room/charmsclass" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=8Te8ndpLzz0" width="100%" height="100%" />
            </Route>
            <Route path="/room/gryffcommon" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=X1PS6PF76-Y" width="100%" height="100%" />
            </Route>
            <Route path="/room/huffcommon" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=-KzNeM2LkqM&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=3" width="100%" height="100%" />
            </Route>
            <Route path="/room/slythcommon" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=wIOc_6QZ3AI&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=8" width="100%" height="100%" />
            </Route>
            <Route path="/room/ravcommon" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=fCMybQ9cG4w&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=4" width="100%" height="100%" />
            </Route>
            <Route path="/room/hogtrain" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=yXq2ziVkK38&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=6" width="100%" height="100%" />
            </Route>
            <Route path="/room/potionclass" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=eyYB-txU6Jg&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=16" width="100%" height="100%" />
            </Route>
            <Route path="/room/threebrooms" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=yhp9b00ziPs&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=7" width="100%" height="100%" />
            </Route>
            <Route path="/room/diagonalley" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=ZlS71cADdDY&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=13" width="100%" height="100%" />
            </Route>
            <Route path="/room/hagrid" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=k8jdOkuhIxU&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=31" width="100%" height="100%" />
            </Route>
            <Route path="/room/lakenight" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=RIemLUQk5Dc&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=14" width="100%" height="100%" />
            </Route>
            <Route path="/room/lakeday" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=QQRHobcT1_A&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=32" width="100%" height="100%" />
            </Route>
            <Route path="/room/prefectbath" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=HJrMtZvXy8c&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=33" width="100%" height="100%" />
            </Route>
            <Route path="/room/kitchens" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=3esrCPM53v0&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=37" width="100%" height="100%" />
            </Route>
            <Route path="/room/defdark" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=LPoaNHkY36U&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=43" width="100%" height="100%" />
            </Route>
            <Route path="/room/firenzeclass" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=xmeWkSbb3xA&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=46" width="100%" height="100%" />
            </Route>
            <Route path="/room/hogheadinn" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=FjjQgKdDqMw&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=51&t=0s" width="100%" height="100%" />
            </Route>
            <Route path="/room/hospital" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=SVS9xh3nHjU&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=53&t=18s" width="100%" height="100%" />
            </Route>
            <Route path="/room/moaningmyrtle" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=6sPJKTIHF2o&list=PLjFwUFnGRUqN9pIvCq6TS1FMaJNxX0KEv&index=54&t=0s" width="100%" height="100%" />
            </Route>
            <Route path="/room/greathall" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=4qxUAoFOd4s" />
            </Route>
            <Route path="/room/forbiddenforestnight" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=liq9KeAsNB4" />
            </Route>
            <Route path="/room/astrology" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=AUKqsr05Az8" />
            </Route>
            <Route path="/room/herbology" exact>
              <ReactPlayer url="https://www.youtube.com/watch?v=ElG_yRX_ZqI" />
            </Route>
          </Switch>
      </div>
      <div className="shared-view-line" />
      <div className="shared-stars">
        <img src={ShootingStar} alt="star" />
      </div>
    </div>
  );
};

SharedView.propTypes = {
  fileURL: PropTypes.string.isRequired,
  roomImage: PropTypes.string.isRequired,
};

export default SharedView;
