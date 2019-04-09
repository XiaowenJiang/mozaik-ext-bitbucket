import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import Mozaik                          from 'mozaik/browser';
import PullRequest                     from './PullRequest.jsx';

class Julie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pulls: []
        };
    }

    getApiRequest() {
        const { project,repo } = this.props;
        const params = {
            project,
            repo
        };

        return { id: `julie.sample`,
                 params: params
        };
    }

    onApiData(pulls) {
        console.log(pulls);
        this.setState({ pulls });
    }

    render() {
        const { project, repo } = this.props;
        const { pulls } = this.state;
        let length = pulls.length;

        return (
            <div>
                <div className="widget__header">
                    <span className="widget__header__subject">Bitbucket Project: { project }</span>
                    <span className="widget__header__count">
                        { length }
                    </span>
                    <i className="fa fa-bitbucket" aria-hidden="true" />
                </div>
                <div className="widget__body">
                    {pulls.map(pullRequest => (
                        <PullRequest key={pullRequest.id} pullRequest={pullRequest}/>
                    ))}
                </div>
            </div>
        );
    }
}

Julie.displayName = 'Julie';

Julie.propTypes = {
    project: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired
};

Julie.defaultProps = {
    project: 'FFV'
};

reactMixin(Julie.prototype, ListenerMixin);
reactMixin(Julie.prototype, Mozaik.Mixin.ApiConsumer);


export default Julie;
