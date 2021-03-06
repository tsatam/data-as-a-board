/*
 * Copyright (c) 2019 Ford Motor Company
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

import React from "react";
import {IconType} from "../../model/IconType";
import styles from "./Icon.module.css";

function MDI(icon: IconType) {
    return <i className={"material-icons"}>{icon}</i>;
}

function MDIRotate(icon: IconType) {
    return <i className={"material-icons " + styles.rotate}>{icon}</i>;
}

export default {
    ok: MDI(IconType.DONE),
    unknown: MDI(IconType.HELP_OUTLINE),
    warn: MDI(IconType.ERROR),
    disabled: MDI(IconType.CLOSE),
    unstable: MDI(IconType.CLOUD_QUEUE),
    inProgress: MDIRotate(IconType.CACHED),
    disconnected: MDI(IconType.CANCEL),
    add: MDI(IconType.ADD),
    remove: MDI(IconType.REMOVE),
    delete: MDI(IconType.DELETE),
};
