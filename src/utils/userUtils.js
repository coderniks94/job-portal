export function isUserCompanyAdmin(user) {
    if(!user || !('additionalDetails' in user)){
        return false;
    }
    return user.additionalDetails.roles.some((role)=>{
        return role.name === 'company-admin';
    });
}

export function isUserJobSeeker(user) {
    if(!user || !('additionalDetails' in user)){
        return true;
    }
    return user.additionalDetails.roles.some((role)=>{
        return role.name === 'job-seeker';
    });
}

export function isUserHiringManager(user) {
    if(!user || !('additionalDetails' in user)){
        return false;
    }
    return user.additionalDetails.roles.some((role)=>{
        return role.name === 'hiring-manager';
    });
}

export function isUserAdmin(user) {
    if(!user || !('additionalDetails' in user)){
        return false;
    }
    return user.additionalDetails.roles.some((role)=>{
        return role.name === 'admin';
    });
}

export function isRecruiterDashboardVisible(user) {
    return  isUserCompanyAdmin(user) || isUserAdmin(user);
}

export function isViewApplicantsButtonVisible(user) {
    return isUserCompanyAdmin(user) || isUserHiringManager(user);
}

