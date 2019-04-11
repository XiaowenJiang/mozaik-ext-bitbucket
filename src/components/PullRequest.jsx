import React, { Component, PropTypes } from 'react';


class PullRequest extends Component {
    render() {
        const { pullRequest } = this.props;
        const addr = pullRequest.links.self[0].href;
        const author = pullRequest.author.user.displayName;
        return (
            <div className="list__item bitbucket__pull-request">
                <span className="bitbucket__pull-request__id">
                    { pullRequest.id }
                </span>
                <span className="bitbucket__pull-request__author">
                    { author }
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
