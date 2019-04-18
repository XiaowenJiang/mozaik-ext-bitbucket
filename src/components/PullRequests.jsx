import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import Mozaik                          from 'mozaik/browser';
import PullRequest                     from './PullRequest.jsx';

class PullRequests extends Component {
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

        return { id: `bitbucket.pullrequests`,
                 params: params
        };
    }

    onApiData(pulls) {
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

PullRequests.displayName = 'PullRequests';

PullRequests.propTypes = {
    project: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired
};

reactMixin(PullRequests.prototype, ListenerMixin);
reactMixin(PullRequests.prototype, Mozaik.Mixin.ApiConsumer);


export default PullRequests;
