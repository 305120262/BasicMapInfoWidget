define(["require", "exports", "dojo/_base/declare"], function (require, exports, declare) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A decorator that converts a TypeScript class into a declare constructor.
     * This allows declare constructors to be defined as classes, which nicely
     * hides away the `declare([], {})` boilerplate.
     */
    function default_1() {
        var mixins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mixins[_i] = arguments[_i];
        }
        return function (target) {
            return declare(mixins, target.prototype);
        };
    }
    exports.default = default_1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyZURlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dpZGdldHMvQmFzaWNNYXBJbmZvV2lkZ2V0L3N1cHBvcnQvZGVjbGFyZURlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBOzs7O09BSUc7SUFDSDtRQUF5QixnQkFBb0I7YUFBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1lBQXBCLDJCQUFvQjs7UUFDNUMsTUFBTSxDQUFDLFVBQVUsTUFBZ0I7WUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQztJQUNILENBQUM7SUFKRCw0QkFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRlY2xhcmUgZnJvbSAnZG9qby9fYmFzZS9kZWNsYXJlJztcclxuXHJcbi8qKlxyXG4gKiBBIGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgVHlwZVNjcmlwdCBjbGFzcyBpbnRvIGEgZGVjbGFyZSBjb25zdHJ1Y3Rvci5cclxuICogVGhpcyBhbGxvd3MgZGVjbGFyZSBjb25zdHJ1Y3RvcnMgdG8gYmUgZGVmaW5lZCBhcyBjbGFzc2VzLCB3aGljaCBuaWNlbHlcclxuICogaGlkZXMgYXdheSB0aGUgYGRlY2xhcmUoW10sIHt9KWAgYm9pbGVycGxhdGUuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoLi4uIG1peGluczogT2JqZWN0W10pIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogRnVuY3Rpb24pIHtcclxuXHRcdHJldHVybiBkZWNsYXJlKG1peGlucywgdGFyZ2V0LnByb3RvdHlwZSk7XHJcblx0fTtcclxufSJdfQ==