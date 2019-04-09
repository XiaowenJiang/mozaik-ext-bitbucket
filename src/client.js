import request from 'superagent';
import Promise from 'bluebird';
import cache   from 'memory-cache';
import config  from './config';
import chalk   from 'chalk';
require('superagent-bluebird-promise');


/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {
    mozaik.loadApiConfig(config);

    function buildRequest(path) {
        const url = config.get('bitbucket.baseUrl') + path;
        let req = request.get(url);

        mozaik.logger.info(chalk.yellow(`[bitbucket] fetching from ${ url }`));

        return req
            .auth(
                config.get('bitbucket.basicAuthUser'),
                config.get('bitbucket.basicAuthKey')
            )
            .promise()
            .catch(error => {
                mozaik.logger.error(chalk.red(`[bitbucket] ${ error }`));
                throw error;
            })
        ;
    }

    const methods = {
        pullrequests(params) {
            return buildRequest(`rest/api/1.0/projects/${ params.project }/repos/${ params.repo }/pull-requests?limit=100`)
                .then(res => res.body.values)
            ;
        }
      };

    return methods;
};


export default client;
