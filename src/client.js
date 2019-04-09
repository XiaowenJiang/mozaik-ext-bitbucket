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
        const url = config.get('julie.baseUrl') + path;
        let req = request.get(url);

        mozaik.logger.info(chalk.yellow(`[bitbucket] fetching from ${ url }`));

        return req
            .auth(
                config.get('julie.basicAuthUser'),
                config.get('julie.basicAuthKey')
            )
            .promise()
            .catch(error => {
                mozaik.logger.error(chalk.red(`[bitbucket] ${ error }`));
                throw error;
            })
        ;
    }

    const methods = {
        sample(params) {
            return buildRequest(`rest/api/1.0/projects/${ params.project }/repos/${ params.repo }/pull-requests?limit=100`)
                .then(res => res.body.values)
            ;
        }
      };

    return methods;
};


export default client;
