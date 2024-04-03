import {DEST} from './lib/config';

export const handle = async ({ event, resolve }) => {

    let referrer = event.request.headers.get('Referer') || event.request.headers.get('referer');
    let slug = get_slug(event.url);
    let fblid = event.url.searchParams.get('fbclid');

    if((!is_empty(referrer) || !is_empty(fblid) ) && !is_empty(slug)){
        return new Response(null, {
            status: 302,
            headers: {location: DEST + slug}
        })
    }

    return resolve(event);
};


function get_slug(url) {
    let parts = url.href.split(url.host);
    let last_path = last(last(parts).split('/'));

    return is_empty(last_path) ? null : last_path.trim();
}

function last(arr){
    return arr[arr.length - 1];
}

function is_empty(str){
    return str == null || str.trim() == '';
}