export function resolvePromise(prms,promiseState){
    promiseState.promise = prms
    promiseState.data = null
    promiseState.error = null

    function storeDataACB (resolvePromise){
        if (promiseState.promise !== prms) {
            return; // Because the current promise is obsolete
        }
        promiseState.data = resolvePromise;
    }

    function storeErrorACB(rejectedPromise){
        if (promiseState.promise !== prms) {
            return; // Because the current promise is obsolete
        }
        promiseState.error = rejectedPromise
        console.log("The promise was rejected")
    }

    if (prms){
        prms.then(storeDataACB).catch(storeErrorACB)
    }
}