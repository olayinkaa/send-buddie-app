/* eslint-disable react/prop-types */
import { Navigate } from "react-router";
import { useAuth } from "../../hooks";

export default function GuardRoute({ expectedRoles, component }) {
    const {
        authState: { permissions },
    } = useAuth();
    const areRolesRequired = !!expectedRoles?.length;

    const rolesMatch = areRolesRequired ? expectedRoles.some((r) => permissions.includes(r)) : true;

    // if (!rolesMatch || !isProfileUpdated) {
    if (!rolesMatch) {
        return <Navigate to="/dashboard" replace />;
    }

    return component;
}

GuardRoute.defaultProps = {
    expectedRoles: []
}