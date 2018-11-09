// jIMU (WAB) imports:
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "jimu/BaseWidget", "./support/declareDecorator"], function (require, exports, BaseWidget, declareDecorator_1) {
    /// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
    var Widget = /** @class */ (function () {
        function Widget() {
            this.baseClass = "basic-map-info-widget";
            // onOpen() {
            //   console.log('BasicMapInfoWidget::onOpen');
            // };
            // onClose(){
            //   console.log('BasicMapInfoWidget::onClose');
            // };
            // onMinimize(){
            //   console.log('BasicMapInfoWidget::onMinimize');
            // };
            // onMaximize(){
            //   console.log('BasicMapInfoWidget::onMaximize');
            // };
            // onSignIn(credential){
            //   console.log('BasicMapInfoWidget::onSignIn', credential);
            // };
            // onSignOut(){
            //   console.log('BasicMapInfoWidget::onSignOut');
            // };
            // onPositionChange(){
            //   console.log('BasicMapInfoWidget::onPositionChange');
            // };
            // resize(){
            //   console.log('BasicMapInfoWidget::resize');
            // };
        }
        Widget.prototype.postCreate = function (args) {
            var self = this;
            self.inherited(arguments);
            console.log("BasicMapInfoWidget::postCreate");
        };
        Widget.prototype.startup = function () {
            var self = this;
            self.inherited(arguments);
            console.log('BasicMapInfoWidget::startup');
            self.map.on('extent-change', function (evt) {
                var level = self.map.getLevel();
                if (level !== null) {
                    console.log(level);
                }
            });
        };
        Widget = __decorate([
            declareDecorator_1.default(BaseWidget)
        ], Widget);
        return Widget;
    }());
    return Widget;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vd2lkZ2V0cy9CYXNpY01hcEluZm9XaWRnZXQvV2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjs7Ozs7Ozs7SUFFdEIsK0RBQStEO0lBc0IvRDtRQURBO1lBRUUsY0FBUyxHQUFHLHVCQUF1QixDQUFDO1lBdUJwQyxhQUFhO1lBQ2IsK0NBQStDO1lBQy9DLEtBQUs7WUFDTCxhQUFhO1lBQ2IsZ0RBQWdEO1lBQ2hELEtBQUs7WUFDTCxnQkFBZ0I7WUFDaEIsbURBQW1EO1lBQ25ELEtBQUs7WUFDTCxnQkFBZ0I7WUFDaEIsbURBQW1EO1lBQ25ELEtBQUs7WUFDTCx3QkFBd0I7WUFDeEIsNkRBQTZEO1lBQzdELEtBQUs7WUFDTCxlQUFlO1lBQ2Ysa0RBQWtEO1lBQ2xELEtBQUs7WUFDTCxzQkFBc0I7WUFDdEIseURBQXlEO1lBQ3pELEtBQUs7WUFDTCxZQUFZO1lBQ1osK0NBQStDO1lBQy9DLEtBQUs7UUFDUCxDQUFDO1FBM0NDLDJCQUFVLEdBQVYsVUFBVyxJQUFTO1lBQ2xCLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUEsd0JBQU8sR0FBUDtZQUNFLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUUzQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQyxHQUFHO2dCQUMvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQyxFQUFFLENBQUMsQ0FBRSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQXRCRSxNQUFNO1lBRFgsMEJBQU8sQ0FBQyxVQUFVLENBQUM7V0FDZCxNQUFNLENBZ0RYO1FBQUQsYUFBQztLQUFBLEFBaERELElBZ0RDO0lBRUQsT0FBUyxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBqSU1VIChXQUIpIGltcG9ydHM6XHJcblxyXG4vLy8gPGFtZC1kZXBlbmRlbmN5IHBhdGg9XCJqaW11L0Jhc2VXaWRnZXRcIiBuYW1lPVwiQmFzZVdpZGdldFwiIC8+XHJcbmRlY2xhcmUgdmFyIEJhc2VXaWRnZXQ6IGFueTsgLy8gdGhlcmUgaXMgbm8gdHMgZGVmaW5pdGlvbiBvZiBCYXNlV2lkZ2V0ICh5ZXQhKVxyXG5cclxuLy8gZGVjbGFyZURlY29yYXRvciAtIHRvIGVuYWJsZSB1cyB0byBleHBvcnQgdGhpcyBtb2R1bGUgd2l0aCBEb2pvJ3MgXCJkZWNsYXJlKClcIiBzeW50YXggc28gV0FCIGNhbiBsb2FkIGl0OlxyXG5pbXBvcnQgZGVjbGFyZSBmcm9tIFwiLi9zdXBwb3J0L2RlY2xhcmVEZWNvcmF0b3JcIjtcclxuXHJcbi8vIGVzcmkgaW1wb3J0czpcclxuaW1wb3J0IGVzcmkgPSByZXF1aXJlKFwiZXNyaVwiKTtcclxuaW1wb3J0IEVzcmlNYXAgPSByZXF1aXJlKFwiZXNyaS9tYXBcIik7XG4vLyBpbXBvcnQgKiBhcyBvbiBmcm9tICdkb2pvL29uJztcclxuXHJcbi8vIGRvam8gaW1wb3J0czogKGV4YW1wbGUgYmVsb3cpXHJcbi8vIGltcG9ydCAqIGFzIG9uIGZyb20gJ2Rvam8vb24nO1xyXG5cclxuaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgc2VydmljZVVybDogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBXaWRnZXQge1xyXG4gIGNvbmZpZz86IENvbmZpZztcclxufVxyXG5cclxuQGRlY2xhcmUoQmFzZVdpZGdldClcclxuY2xhc3MgV2lkZ2V0IHtcclxuICBiYXNlQ2xhc3MgPSBcImJhc2ljLW1hcC1pbmZvLXdpZGdldFwiO1xyXG5cclxuICBtYXA6IEVzcmlNYXA7XHJcblxyXG4gIHBvc3RDcmVhdGUoYXJnczogYW55KSB7XHJcbiAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcclxuICAgIHNlbGYuaW5oZXJpdGVkKGFyZ3VtZW50cyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkJhc2ljTWFwSW5mb1dpZGdldDo6cG9zdENyZWF0ZVwiKTtcclxuICB9XG5cclxuICAgc3RhcnR1cCgpIHtcclxuICAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcclxuICAgICBzZWxmLmluaGVyaXRlZChhcmd1bWVudHMpO1xyXG4gICAgIGNvbnNvbGUubG9nKCdCYXNpY01hcEluZm9XaWRnZXQ6OnN0YXJ0dXAnKTtcbiAgICAgXG4gICAgIHNlbGYubWFwLm9uKCdleHRlbnQtY2hhbmdlJywgKGV2dCkgPT4ge1xuICAgICAgIHZhciBsZXZlbCA9IHNlbGYubWFwLmdldExldmVsKCk7XG4gICAgICAgaWYgKCBsZXZlbCAhPT0gbnVsbCkge1xuICAgICAgICAgY29uc29sZS5sb2cobGV2ZWwpO1xuICAgICAgIH1cbiAgICAgfSk7XHJcbiAgIH1cblxyXG4gIC8vIG9uT3BlbigpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdCYXNpY01hcEluZm9XaWRnZXQ6Om9uT3BlbicpO1xyXG4gIC8vIH07XHJcbiAgLy8gb25DbG9zZSgpe1xyXG4gIC8vICAgY29uc29sZS5sb2coJ0Jhc2ljTWFwSW5mb1dpZGdldDo6b25DbG9zZScpO1xyXG4gIC8vIH07XHJcbiAgLy8gb25NaW5pbWl6ZSgpe1xyXG4gIC8vICAgY29uc29sZS5sb2coJ0Jhc2ljTWFwSW5mb1dpZGdldDo6b25NaW5pbWl6ZScpO1xyXG4gIC8vIH07XHJcbiAgLy8gb25NYXhpbWl6ZSgpe1xyXG4gIC8vICAgY29uc29sZS5sb2coJ0Jhc2ljTWFwSW5mb1dpZGdldDo6b25NYXhpbWl6ZScpO1xyXG4gIC8vIH07XHJcbiAgLy8gb25TaWduSW4oY3JlZGVudGlhbCl7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnQmFzaWNNYXBJbmZvV2lkZ2V0OjpvblNpZ25JbicsIGNyZWRlbnRpYWwpO1xyXG4gIC8vIH07XHJcbiAgLy8gb25TaWduT3V0KCl7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnQmFzaWNNYXBJbmZvV2lkZ2V0OjpvblNpZ25PdXQnKTtcclxuICAvLyB9O1xyXG4gIC8vIG9uUG9zaXRpb25DaGFuZ2UoKXtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdCYXNpY01hcEluZm9XaWRnZXQ6Om9uUG9zaXRpb25DaGFuZ2UnKTtcclxuICAvLyB9O1xyXG4gIC8vIHJlc2l6ZSgpe1xyXG4gIC8vICAgY29uc29sZS5sb2coJ0Jhc2ljTWFwSW5mb1dpZGdldDo6cmVzaXplJyk7XHJcbiAgLy8gfTtcclxufVxyXG5cclxuZXhwb3J0ID0gV2lkZ2V0O1xuIl19