class Unit {
    /**
     * <b>해당 값에 단위를 붙여줍니다.</b>
     * <pre>
     * 기본 단위는 px입니다.
     * data타입에 숫자가 아닌 데이터가 들어오면 그대로 반환해줌
     * </pre>
     * @param {Number} data - 단위를 붙일 값을 넘겨받습니다.
     * @param {String} unit - 단위를 넘겨받습니다.
     * @return {Any} data - 값에 단위를 붙여서 넘겨줍니다.
     */
    makeUnit(data, unit = 'px') {
        if (isNaN(data)) {
            return data;
        }
        return data + unit;
    }
}

export default new Unit();