import {Checksum256Type, NameType, PublicKeyType} from '@greymass/eosio'

export interface CoreRawValue {
    object: any
    type: string
}

export interface IdentityRequestParams {
    network: Checksum256Type
    actor: NameType
    permission: NameType
    payload: string
}

export interface SessionParams {
    network: Checksum256Type
    actor: NameType
    permission: NameType
    publicKey: PublicKeyType
    name: string
}

export const esrParams = ['bn', 'ex', 'rbn', 'req', 'rid', 'sa', 'sig', 'sp', 'tx']

export const protocolHandlers = ['esr', 'esr-anchor', 'anchor']
// export const creationProtocols = ['anchorcreate']