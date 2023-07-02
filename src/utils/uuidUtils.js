import { v4 as uuidv4 } from 'uuid';

export function getNewUuidV4() {
    return uuidv4().split('-')[4];
}