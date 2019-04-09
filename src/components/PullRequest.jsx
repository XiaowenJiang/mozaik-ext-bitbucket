import React, { Component, PropTypes } from 'react';


class PullRequest extends Component {
    render() {
        const { pullRequest } = this.props;
        const addr = pullRequest.links.self[0].href;
        return (
            <div className="list__item bitbucket__pull-request">
                <span className="bitbucket__pull-request__id">
                    { pullRequest.id }
                </span>
                <a href={addr} className="bitbucket__pull-request__title">
                    { pullRequest.title }
                </a>
            </div>
      );
    }
};

PullRequest.displayName = 'PullRequest';
PullRequest.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PullRequest;
