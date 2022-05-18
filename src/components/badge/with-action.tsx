import WithActionHeadless from '../../lib/badge/with-action'
import Icon from '../icon'
import Spinner from '../spinner'

import Badge from './index'


const WithAction = WithActionHeadless(Badge, Spinner, () => <Icon name="copy"/>)

export default WithAction